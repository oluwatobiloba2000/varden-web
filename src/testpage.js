import React, { PureComponent } from "react";

import Button from "./components/Button";
import Input from "./components/TextInput";
import FileUpload from "./components/FileUpload";


import Card from "./components/Card";

class TestPage extends PureComponent {
  state = {
    imageUpload: false
  };

  onChange = e => {
    console.log(e.target.value);
  };

  //function for the file upload
  onSelectedImage = img => {
    // let upload = new FormData();
    console.log(img);
    // upload.append('images', img);
    // this.setState({ imageUpload: false });
    // FETCH({
    // 	url: `${API.upload}`,
    // 	method: `POST`,
    // 	data: upload,
    // }).then(({ data }) => {
    // 	console.log(data);
    // 	this.setState({
    // 		imageUpload: true,
    // 		data: {
    // 			...this.state.data,
    // 			images: [data],
    // 		},
    // 	});
    // });
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div
            className="main-content"
            style={{ marginLeft: 300, marginTop: 100 }}
          >
            <h4>This shows how each reusable components can be used</h4>

            <div className="row">
              <div className="col-sm-4">
                <h5>Button</h5>
                <Input
                  type="text"
                  placeholder="username"
                  onChange={this.onChange}
                  height="50px"
                />
                <Button
                  buttonText="Get started"
                  type="main"
                  height="60px"
                  main={true}
                  onClick={() => alert("working")}
                />
              </div>
              <div className="col-sm-3" style={{ height: 300 }}>
                <FileUpload
                  height="208px"
                  label="edit-upload"
                  uploadText="upload image for this product"
                  onSelectedImage={this.onSelectedImage}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <h5>CardItem</h5>
                <p>Sample Card</p>
                <div style={{ backgroundColor: "#E5E5E5", padding: 20 }}>
                  <Card
                    title="Fresh Sweet Orange"
                    quantityLeft="40"
                    price="500"
                  />
                </div>
              </div>
              <div className="col-sm-3">
                {/* <EmptyState
                  title="Arrggh Cripsy"
                  text="this is an empty state with lots of shit in it"
                  icon={logo}
                  onClick={() => alert("working")}
                /> */}
                <div className="col-sm-12">
                  <h5>CardItem</h5>
                  <p>Sample Card</p>
                  <div style={{ backgroundColor: "#E5E5E5", padding: 20 }}>
                    <Card
                      title="Fresh Sweet Orange"
                      quantityLeft="40"
                      price="500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestPage;
