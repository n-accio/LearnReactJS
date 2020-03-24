class KhoaPham extends React.Component{
  constructor(props) {
    super(props);
    this.layThongTin = this.layThongTin.bind(this);
  }
  layThongTin() {
    alert(this.props.children);
  }

  render() {
    return (
      <div>
        <h1 className="violet"> {this.props.subject} - {this.props.lecturers}</h1>
        <p> {this.props.children} </p>
        <button onClick={
          this.layThongTin
        }>Thong tin</button>
        <h3>Lap Trinh ReatJs</h3>
      </div>
    )
  }
};

ReactDOM.render( 
  <div>
    <KhoaPham subject="ReactJs" lecturers="Mr Khoa Pham"> Mon hoc React</KhoaPham>
      <KhoaPham subject="Node Js" lecturers="Mr Thinh">Mon hoc Node</KhoaPham> 
  </div>
  , document.getElementById("root")
);
