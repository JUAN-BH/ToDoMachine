import React from "react";
import { withStorageListener } from "./withStorageListener";

const ChangeAlert = (props) => {
  const { show, toggleShow } = props;

  function refreshPage() {
    window.location.reload();
    // syncronize(false);
    toggleShow(false);
  }

  if (show) {
    return (
      <section className="modalContainer">
        <article className="modalContainer__changesAlert">
          <h2 className="modalContainer__changesAlert__title">
            It appears that you have made a change in another tab or window,
            please refresh the page to continue.
          </h2>
          <button
            onClick={refreshPage}
            className="modalContainer__changesAlert__btnRefresh"
          >
            Refresh page
          </button>
        </article>
      </section>
    );
  } else {
    return null;
  }
};

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
