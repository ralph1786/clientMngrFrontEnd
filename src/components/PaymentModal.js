import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "react-modal";
import { toast } from "react-toastify";
import "./PaymentModal.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    padding: "30px",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    webkitboxShadow: "11px 10px 44px 4px rgba(0,0,0,0.75)",
    mozboxShadow: "11px 10px 44px 4px rgba(0,0,0,0.75)",
    boxShadow: "11px 10px 44px 4px rgba(0,0,0,0.75)",
    borderRadius: "15px",
    backgroundImage:
      "url(http://www.designshock.com/wp-content/uploads/2015/02/sea.jpg)"
  }
};

class PaymentModal extends Component {
  state = {
    isModalOpen: true,
    amount: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    let currentBalance = this.props.selectedChild.balance;
    let payAmount = this.state.amount;
    let newBalance = Math.round(currentBalance - payAmount);
    fetch(
      `http://localhost:80/api/v1/children/${this.props.selectedChild.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ balance: newBalance })
      }
    )
      .then(res => res.json())
      .then(res => {
        toast.info("Payment Successful", {
          position: toast.POSITION.BOTTOM_CENTER
        });
        this.setState({
          isModalOpen: false
        });
        this.props.history.push("/parent_dashboard");
      })
      .catch(err => console.log(err));
  };

  //Used to make modal accessible
  componentWillMount() {
    Modal.setAppElement("body");
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.isModalOpen}
          style={customStyles}
          // onRequestClose={this.closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <span
            className="close-button"
            onClick={() => this.props.history.push("/parent_dashboard")}
          >
            X
          </span>
          <form className="payment-form" onSubmit={this.handleSubmit}>
            <img
              src="https://www.wrenvironmental.com/wp-content/uploads/2018/09/major-credit-card-logos-png-5.png"
              alt="credit card logos"
            />
            <input
              name="amount"
              type="text"
              value={this.state.amount}
              placeholder="amount"
              onChange={this.handleChange}
            />
            <input
              name="cardNumber"
              type="text"
              value={this.state.cardNumber}
              placeholder="card number"
              onChange={this.handleChange}
              maxLength="16"
            />
            <input
              name="cvv"
              type="text"
              value={this.state.cvv}
              placeholder="CVV"
              onChange={this.handleChange}
              maxLength="4"
            />
            <input
              name="month"
              type="text"
              value={this.state.month}
              placeholder="month"
              maxLength="2"
              onChange={this.handleChange}
            />

            <input
              name="year"
              type="text"
              value={this.state.year}
              placeholder="year"
              onChange={this.handleChange}
              maxLength="4"
            />
            <button>Pay</button>
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedChild: state.editChild
  };
};

export default withRouter(connect(mapStateToProps)(PaymentModal));
