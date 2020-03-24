function getName(name){
  alert(name);
}

class KhoaPham extends React.Component{

  addStudent(){
    this.setState({tongHocVien: this.state.tongHocVien + 1});
  }
  constructor(props) {
    super(props);
    this.layThongTin = this.layThongTin.bind(this);
    this.state = {tongHocVien: 0};
    this.addStudent= this.addStudent.bind(this);
  }
  layThongTin() {
    alert(this.props.children);
  }

  render() {
    return (
      <div>
        <h1 className="violet"> {this.props.subject} - {this.props.lecturers}</h1>
        <div>So hoc vien: {this.state.tongHocVien}</div>
        <p> {this.props.children} </p>
        <button onClick={
          () =>{var str= this.props.lecturers + " "+ this.props.subject; getName(str)}
        }>Thong tin</button>
        <button onClick={this.addStudent}>Đang Ky Hoc</button>
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
