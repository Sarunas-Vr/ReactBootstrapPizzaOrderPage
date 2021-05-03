import React from "react";
import { Toast, ToastBody } from "react-bootstrap";

export function Confirmation({ toggle }) {
  return (
    <Toast onClose={() => toggle(false)}>
      <Toast.Header>
        <strong className="mr-auto">Your Order Is In The Oven</strong>
        <small>just now</small>
      </Toast.Header>
      <ToastBody>
        Your delicious pizza will be with you in 30 minutes!
      </ToastBody>
    </Toast>
  );
}
