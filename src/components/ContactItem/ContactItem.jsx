/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { deleteContact } from "../../redux/contact/contactsOperations";
import { updateContact } from "../../redux/contact/contactsOperations";
import { useEffect, useState } from "react";

import s from "./ContactItem.module.css";

const ContactItem = ({ id, name = "", number = "" }) => {
  const dispatch = useDispatch();
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedNumber, setUpdatedNumber] = useState(number);

  useEffect(() => {
    setUpdatedName(name);
    setUpdatedNumber(number);
  }, [name, number]);

  const handleUpdateClick = () => {
    setIsUpdating(true);
  };

  const handleSaveUpdate = () => {
    const contact = { name: updatedName, number: updatedNumber };
    dispatch(updateContact({ contactId: id, contact }));
    setIsUpdating(false);
  };

  const handleCancelUpdate = () => {
    console.log("Cancel clicked, resetting to:", name, number);
    setIsUpdating(false);
    setUpdatedName(name);
    setUpdatedNumber(number);
  };

  return (
    <li className={s.listItem}>
      {isUpdating ? (
        <div className={s.editForm}>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            className={s.input}
          />
          <input
            type="tel"
            value={updatedNumber}
            onChange={(e) => setUpdatedNumber(e.target.value)}
            className={s.input}
          />
          <Button
            btnType="button"
            className={s.saveBtn}
            id={id}
            onClick={() => handleSaveUpdate(id)}
            disabled={updatedName === name && updatedNumber === number}
          >
            Save
          </Button>
          <Button
            btnType="button"
            className={s.cancelBtn}
            onClick={handleCancelUpdate}
          >
            Cancel
          </Button>
        </div>
      ) : (
        <>
          <div className={s.itemName}>
            <span>{name}</span>
          </div>
          <div className={s.itemNumber}>
            <span>{number}</span>
          </div>
          <Button
            btnType="button"
            id={id}
            onClick={handleUpdateClick}
            className={s.itemBtnEdit}
          >
            <div className={s.svgWrapper}>
              <svg viewBox="0 0 31 32" id="edit">
                <path
                  fill="rgb(0, 106, 114)"
                  d="M0.211 5.646c-0.847 0.848-0.666 2.042 0.008 2.715 0.027 0.026 2.734 2.612 6.541 6.419 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707-0.574-0.574-1.12-1.117-1.638-1.631l1.589-1.589c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-1.593 1.593c-0.891-0.88-1.676-1.648-2.315-2.271l3.615-3.615c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-3.626 3.626c-0.736-0.713-1.16-1.118-1.167-1.125-0.211-0.211-0.488-0.805 0-1.293l5-5c0.193-0.196 0.707-0.585 1.271-0.024 0.025 0.028 2.55 2.896 6.404 6.75 0.195 0.195 0.512 0.195 0.707 0s0.195-0.512 0-0.707c-3.83-3.829-6.336-6.675-6.382-6.727-0.932-0.93-2.056-0.651-2.707 0l-5.001 5zM21.419 24.146c-0.195-0.195-0.512-0.195-0.707 0l-1.591 1.59c-0.485-0.491-0.994-1.005-1.53-1.541-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707c3.704 3.703 6.291 6.469 6.328 6.509 0.343 0.344 0.813 0.533 1.323 0.533v0c0.525 0 1.056-0.205 1.385-0.535l4.998-5.057c0.629-0.629 0.665-1.696 0.078-2.285l-6.706-6.705c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l6.706 6.705c0.2 0.2 0.162 0.632-0.079 0.873l-4.999 5.057c-0.115 0.116-0.376 0.24-0.676 0.24 0 0 0 0 0 0-0.172 0-0.418-0.042-0.604-0.229-0.010-0.011-0.429-0.458-1.156-1.219l3.644-3.644c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-3.629 3.629c-0.624-0.649-1.389-1.438-2.26-2.326l1.596-1.596c0.195-0.194 0.195-0.51 0-0.706zM-0.293 31.829c0.096 0.098 0.225 0.15 0.358 0.15 0.048 0 0.096-0.007 0.143-0.021l10-2.979c0.081-0.024 0.153-0.067 0.212-0.127l17.090-17.205c0.024-0.024 0.036-0.055 0.054-0.082l3.656-3.656c0.294-0.295 0.457-0.686 0.457-1.103s-0.163-0.807-0.457-1.1l-5.235-5.234c-0.588-0.588-1.615-0.588-2.203 0l-3.739 3.739c-0.024 0.024-0.037 0.055-0.055 0.083l-17.116 17.117c-0.056 0.056-0.098 0.124-0.122 0.199l-3.16 9.715c-0.058 0.177-0.013 0.37 0.117 0.504zM20.425 5.271l1.039 1.039-15.523 15.565-1.727-0.392 16.211-16.212zM6.565 22.666l15.607-15.648 2.436 2.436-15.748 15.546h-2.295v-2.334zM26.449 11.296l-16.244 16.354-0.577-2.002 15.687-15.487 1.134 1.135zM3.558 22.359l2.007 0.456v2.685c0 0.276 0.224 0.5 0.5 0.5h2.624l0.634 2.2-8.488 2.529 2.723-8.37zM24.49 1.179c0.211-0.211 0.578-0.211 0.789 0l5.235 5.235c0.105 0.105 0.163 0.245 0.163 0.394 0 0.148-0.058 0.289-0.164 0.395l-3.371 3.372-6.023-6.023 3.371-3.373z"
                ></path>
              </svg>
            </div>
          </Button>

          <Button
            btnType={"button"}
            id={id}
            onClick={() => dispatch(deleteContact(id))}
            className={s.itemBtn}
          >
            <div className={s.svgWrapper}>
              <svg viewBox="0 0 32 32" id="delete">
                <path
                  fill="red"
                  d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"
                ></path>
              </svg>
            </div>
          </Button>
        </>
      )}
    </li>
  );
};

export default ContactItem;
