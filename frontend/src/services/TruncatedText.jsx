import React from "react";
import PropTypes from "prop-types";
class TruncatedText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTruncated: true,
    };
    this.toggleTruncate = this.toggleTruncate.bind(this);
  }

  toggleTruncate() {
    this.setState((prevState) => ({
      isTruncated: !prevState.isTruncated,
    }));
  }

  render() {
    const { text, maxLength } = this.props;
    const { isTruncated } = this.state;

    return (
      <div>
        {isTruncated ? (
          <div>
            {text.length > maxLength ? (
              <span>
                {text.slice(0, maxLength)}
                <button className="text-blue-500" onClick={this.toggleTruncate}>
                  ...Read more
                </button>
              </span>
            ) : (
              <span>{text}</span>
            )}
          </div>
        ) : (
          <div>
            <span>{text}</span>
            <button className="text-red-500" onClick={this.toggleTruncate}>
              Show less
            </button>
          </div>
        )}
      </div>
    );
  }
}
TruncatedText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};
export default TruncatedText;
