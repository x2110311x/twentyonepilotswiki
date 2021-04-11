export default class ImageComponent extends React.Component {
    state = { isOpen: false };
  
    handleShowDialog = () => {
      this.setState({ isOpen: !this.state.isOpen });
      console.log('cliked');
    };
  
    render({imgsrc, alt}) {
      return (
        <div>
          <img
            className="small"
            src={imgsrc}
            onClick={this.handleShowDialog}
            alt={alt}
          />
          {this.state.isOpen && (
            <dialog
              className="dialog"
              style={{ position: 'absolute' }}
              open
              onClick={this.handleShowDialog}
            >
              <img
                className="image"
                src={imgsrc}
                onClick={this.handleShowDialog}
                alt={alt}
              />
            </dialog>
          )}
        </div>
      );
    }
  }