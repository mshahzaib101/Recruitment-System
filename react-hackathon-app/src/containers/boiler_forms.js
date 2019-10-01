// RADIO BUTTONS
// constructor(props) {
//     super(props);
//     this.state = {
//       radio_group: {
//         10: false,
//         20: true,
//         30: false,
//       }
//     }
//   }
//   radioHandler= (ev) => {
//     console.log(ev.target.value);
//     console.log(ev.target.checked);
//     let radioGroup = this.state.radio_group;
//     for(var key in radioGroup) {
//       radioGroup[key] = false
//     }
//     console.log(radioGroup[ev.target.value]);

//     radioGroup[ev.target.value] = ev.target.checked;
//     this.setState({radio_group: radioGroup})
//   }
//    {/* working with forms */}
//       {/* radio buttons */}
//       Q: What is your age?
//       <br />
//       <label>
//         10
//         <input type='radio' name='age' value='10' checked={this.state.radio_group[10]} onChange={this.radioHandler} />
//       </label>
//       <br />
//       <label>
//         20
//         <input type='radio' name='age' value='20' checked={this.state.radio_group[20]} onChange={this.radioHandler} />
//       </label>
//       <br />
//       <label>
//         30
//         <input type='radio' name='age' value='30' checked={this.state.radio_group[30]} onChange={this.radioHandler} />
//       </label>

// CHECK BOX

// constructor(props) {
//     super(props);
//     this.state = {
//       check_group: {
//         10: false,
//         20: true,
//         30: false,
//       }
//     }
//   }

//   checkHandler= (ev) => {
//     console.log(ev.target.value);
//     console.log(ev.target.checked);
//     let checkGroup = this.state.check_group;
//     // for(var key in radioGroup) {
//     //   // radioGroup[key] = false no requirement
//     // }
//     // console.log(radioGroup[ev.target.value]);

//     checkGroup[ev.target.value] = ev.target.checked;
//     this.setState({check_group: checkGroup})
//   }

//   {/* working with forms */}
//       {/* radio buttons */}
//       Q: What is your age?
//       <br />
//       <label>
//         10
//         <input type='checkbox' name='age' value='10' checked={this.state.check_group[10]} onChange={this.checkHandler} />
//       </label>
//       <br />
//       <label>
//         20
//         <input type='checkbox' name='age' value='20' checked={this.state.check_group[20]} onChange={this.checkHandler} />
//       </label>
//       <br />
//       <label>
//         30
//         <input type='checkbox' name='age' value='30' checked={this.state.check_group[30]} onChange={this.checkHandler} />
//       </label>

// SELECT FIELD
// constructor(props) {
//     super(props);
//     this.state = {
//       selectedvalue: '30'
//     }
//   }

//   selecthandler= (ev) => {
//     console.log(ev.target.value);
    
//     this.setState({selectedvalue: ev.target.value})
//   }
//   {/* working with dropdown */}
//       {/* dropdown */}
//       <select value={this.state.selectedvalue} onChange={this.selecthandler}>
//       <option value='10'>
//         10
//       </option>
//       <option value='20'>
//         20
//       </option>
//       <option value='30'>
//         30
//       </option>
//     </select>
