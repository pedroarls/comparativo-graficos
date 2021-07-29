import moment from "moment";

export const random = n => {
  return Math.ceil(Math.random() * n);
};

export const generateData = () => {
  const genData = [];
  for (let i = 1; i < 11; ++i) {
    genData.push({
      date: new Date((2000 + i).toString()),
      point1: random(100),
      point2: random(100)
    });
  }
  return genData;
};

export const simpleData = () => {
  const data = [];
  for (let i = 0; i < 11; ++i) {
    data.push({
      x: moment()
        .subtract(i, "seconds")
        .format(),
      y: random(100)
    });
  }
  return data.reverse();
};

export const addOneSec = date => {
  return moment(date)
    .add(1, "second")
    .format();
};

export const nivoData = () => {
  return [
    {
      id: "category-1",
      data: simpleData().map(({ x, y }) => ({ x: new Date(x), y }))
    },
    {
      id: "category-2",
      data: simpleData().map(({ x, y }) => ({ x: new Date(x), y }))
    }
  ];
};

export const chartjsData = () => {
  let dataSet1 =  simpleData().map(({ x, y }) => ({ x: x, y }));
  let dataSet2 = simpleData().map(({ x, y }) => ({ x: x, y }));
  const labels = [...dataSet1.map(({ x }) => ( x ))];

  dataSet1 = dataSet1.map(({ y }) => ( y ));
  dataSet2 = dataSet2.map(({ y }) => ( y ))

  return {
    labels: labels,
    datasets: [
      {
        label: 'Categoria 1',
        data: dataSet1,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: 'Categoria 2',
        data: dataSet2,
        fill: true,
        borderColor: "#742774"
      },
    ]
  }
}

export const visXData = () => {
  let data = [];

  for (let i = 0; i < 11; ++i) {
    data.push({
      date: moment()
        .subtract(i, "seconds")
        .format(),
      "New York": random(100),
      "San Francisco": random(100)
    });
  }

  return data;
}