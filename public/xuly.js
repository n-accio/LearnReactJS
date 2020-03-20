class KhoaPham extends React.Component{
  render() {
    return (
      <div>
        <h1 className="violet"> Khoa Pham React</h1>
        <KhoaHoc />
      </div>
    )
  }
};

class KhoaHoc extends React.Component{
  render() {
    return <h3>Hoc Lap Trinh ReactJs</h3>
  }
};

ReactDOM.render( 
    <KhoaPham /> 
  , document.getElementById("root")
);
