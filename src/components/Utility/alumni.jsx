import { Chart } from 'react-google-charts'

const Alumni = ({theme}) => {
  var data = [
    ['Country', 'Popularity'],
    ['Germany', 4],
    ['United States', 7],
    ['GB', 4], //Royaume-uni + England
    ['Canada', 14],
    ['France', 210],
    ['Algeria', 148],
    ['Hollande', 3],
    ['Oman', 2],
    ['United Arab Emirates', 3],
    ['Thailand', 1],
    ['Switzerland', 2],
    ['Qatar', 1],
    ['Norway', 1],
    ['Nigeria', 1],
    ['Morocco', 1],
    ['Kuwait', 1],
    ['Kenya', 1],
    ['Italy', 1],
    ['Hungary', 1],
    ['Spain', 2],
    ['Australia', 1],
    ["Saudi Arabia",2],
    ['Thailande',1],
    ['Belgium',1]
  ]

  var options = {
    legend: 'none',
    backgroundColor: 'none',
    colorAxis: { colors: theme === 'dark' ? ['#ACACAC', '#707070'] : ['#14213d','#1e2f55'] },
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
