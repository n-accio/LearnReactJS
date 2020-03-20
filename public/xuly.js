class KhoaPham extends React.Component{
  render() {
    return (
      <div>
        <h1 className="violet"> {this.props.subject} - {this.props.lecturers}</h1>
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
  <div>
    <KhoaPham subject = "ReactJs" lecturers = "Mr Khoa Pham"/>
    <KhoaPham subject = "Node Js" lecturers = "Mr Thinh"/> 
  </div>
  , document.getElementById("root")
);
