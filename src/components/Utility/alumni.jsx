import { Chart } from 'react-google-charts'

const Alumni = () => {
  var data = [
    ['Country', 'Popularity'],
    ['Germany', 4],
    ['United States', 6],
    ['GB', 6], //Royaume-uni + England
    ['Canada', 13],
    ['France', 189],
    ['Algeria', 150],
    ['Hollande', 3],
    ['Oman', 2],
    ['United Arab Emirates', 2],
    ['Thailand', 1],
    ['Switzerland', 1],
    ['Qatar', 1],
    ['Norway', 1],
    ['Nigeria', 1],
    ['Morocco', 1],
    ['Kuwait', 2],
    ['Kenya', 1],
    ['Italy', 1],
    ['Hungary', 1],
    ['Spain', 1],
    ['Australia', 1],
  ]

  var options = {
    legend: 'none',
    backgroundColor: 'none',
    colorAxis: { colors: ['#ACACAC', '#707070'] },
  }

  return (
    <div>
      <Chart
        chartType='GeoChart'
        options={options}
        width='40rem'
        keepAspectRatio={true}
        data={data}
      />
    </div>
  )
}

export default Alumni
