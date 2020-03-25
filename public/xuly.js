function getName(name){
  alert(name);
}

class KhoaPham extends React.Component{

  constructor(props) {
    super(props);
    this.layThongTin = this.layThongTin.bind(this);
    this.state = {tongHocVien: this.props.tongHocVien};
    this.addStudent= this.addStudent.bind(this);
  }
  addStudent(){
    this.setState({tongHocVien: parseInt(this.state.tongHocVien) + 1});
    // this.state.tongHocVien = parseInt(this.state.tongHocVien)+1;
    // this.setState(this.state);
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
    <KhoaPham subject="ReactJs" lecturers="Mr Khoa Pham" tongHocVien="10"> Mon hoc React</KhoaPham>
      <KhoaPham subject="Node Js" lecturers="Mr Thinh" tongHocVien="20">Mon hoc Node</KhoaPham> 
  </div>
  , document.getElementById("root")
);
