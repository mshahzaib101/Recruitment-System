// constructor(props) {
//     super(props);
//     this.state = {
//       upload: null,
//       img: '',
//       a:''
//     }
//   }

//   upload = (ev) => {
//     var that = this;
//     var files = ev.target.files[0];
//     console.log(files)
    
//     console.log(files)
//     var storageRefs =  firebase.storage().ref('images/' + files.name);
//     storageRefs.put(files);
//     console.log(files)
    
//     var reader = new FileReader();
//     reader.onloadend = function() {
//       that.setState({img :reader.result});
//       // img.src = reader.result;
//  } 
//  reader.readAsDataURL(files);
    
//   }
// a=()=>{
//   var that = this;
//   var files = firebase.storage().ref('images/cc.png');
//   console.log(files.name)
//   var w = firebase.storage().ref('images/' + files.name);
//   var reader = new FileReader();
//   reader.onloadend = function() {
//     that.setState({a :reader.result});
    
// } 
// reader.readAsDataURL(w);
//   // Get a reference to the storage service, which is used to create references in your storage bucket
// // var storage = firebase.storage();
// // var b = storage.ref().child('imgs/cc.png')
// // console.log(b)
// // this.setState({img: b})
// // storage.child('images/mountains.jpg').put(this.state.upload)
// }

// <input type='file' onChange={this.upload} />
//       <button onClick={this.a}>upload</button>
      
//       <img src={this.state.img} />