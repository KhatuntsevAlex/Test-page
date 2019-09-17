import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core"
import * as am4maps from "@amcharts/amcharts4/maps"
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow"
import am4themes_material from "@amcharts/amcharts4/themes/material"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

am4core.useTheme(am4themes_material)
am4core.useTheme(am4themes_animated)

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bubble: {}
    }
    this.green = '#1AB394'
    this.grey = '#E6E6E6'
    this.transactions = props.transactions
  }
  componentDidMount() {
    let chart = am4core.create("worldmap", am4maps.MapChart)

    // add zoom control
    chart.zoomControl = new am4maps.ZoomControl()

    // Set map definition
    chart.geodata = am4geodata_worldLow

    // Set projection
    chart.projection = new am4maps.projections.Miller()

    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries())

    // Exclude Antartica
    polygonSeries.exclude = ["AQ"]

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true

    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template
    polygonTemplate.fill = am4core.color(this.grey)

    // Costom config for regions
    polygonSeries.data = this.transactions.map(item => ({ ...item, fill: am4core.color(this.green), }))
    polygonTemplate.tooltipText =
      `{name}
    {transaction} {amount}
    {date}`
    polygonTemplate.propertyFields.fill = "fill"

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover")
    hs.properties.fill = am4core.color("#1AB394")

    // Add image series
    let imageSeries = chart.series.push(new am4maps.MapImageSeries())
    imageSeries.mapImages.template.propertyFields.longitude = "longitude"
    imageSeries.mapImages.template.propertyFields.latitude = "latitude"

    // add events to recalculate map position when the map is moved or zoomed
    chart.events.on("mappositionchanged", updateCustomMarkers)

    // add zoom control
    chart.zoomControl = new am4maps.ZoomControl()

    // this function will take current images on the map and create HTML elements for them
    function updateCustomMarkers() {

      // go through all of the images
      imageSeries.mapImages.each(function (image) {
        // check if it has corresponding HTML element
        if (!image.dummyData || !image.dummyData.externalElement) {
          // create onex
          image.dummyData = {
            externalElement: createCustomMarker(image)
          }
        }

        // reposition the element accoridng to coordinates
        let xy = chart.geoPointToSVG({ longitude: image.longitude, latitude: image.latitude })
        image.dummyData.externalElement.style.top = xy.y + 'px'
        image.dummyData.externalElement.style.left = xy.x + 'px'
      })
    }

    // this function creates and returns a new marker element
    function createCustomMarker(image) {
      let chart = image.dataItem.component.chart

      // create holder
      let holder = document.createElement('div')
      holder.className = 'map-marker'
      holder.title = image.dataItem.dataContext.title
      holder.style.position = 'absolute'

      // maybe add a link to it?
      if (undefined !== image.url) {
        holder.onclick = function () {
          window.location.href = image.url
        }
        holder.className += ' map-clickable'
      }

      // create dot
      let dot = document.createElement('div')
      dot.className = 'dot'
      holder.appendChild(dot)

      // create pulse
      let pulse = document.createElement('div')
      pulse.className = 'pulse'
      holder.appendChild(pulse)

      // append the marker to the map container
      chart.svgContainer.htmlElement.appendChild(holder)

      return holder
    }
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose()
    }
  }

  render() {
    return (
      <div id="worldmap" style={{ width: "49%", height: "inherit" }}></div>
    )
  }
}

export default Map