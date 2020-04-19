import React, { ReactElement } from "react";
import { LaunchFormProps } from "./types";
import Select from "react-select";
import { useForm } from "react-hook-form";
import "./styles.css";

const LaunchForm = (props: LaunchFormProps): ReactElement | null => {
  const { signer, updateSigner, handleNetworkChange, network, handleLaunchSubmit, loading, currentStep } = props;
  const { register, handleSubmit } = useForm();

  const selectValue = { value: network, label: network.charAt(0).toUpperCase() + network.slice(1) };

  const options = [
    { value: "mainnet", label: "Mainnet" },
    { value: "carthagenet", label: "Carthagenet" },
    { value: "sandbox", label: "Sandbox" },
  ];

  const handleChange = (selectedOption: any) => {
    handleNetworkChange(selectedOption.value);
  };

  if (currentStep !== 2) return null;
  return (
    <>
      <div id="dialog">
        <h2>Originate Contract</h2>
        <Select
          name="address"
          ref={register}
          className="network-select"
          options={options}
          value={selectValue}
          onChange={handleChange}
        />
        <label className="signer-toolbar">
          {network !== "mainnet" && (
            <>
              <input onClick={updateSigner} value="ephemeral" id="ephemeral" type="radio" />
              <label
                className={signer === "ephemeral" ? "signer-button-selected" : "signer-button"}
                htmlFor="ephemeral"
              >
                Ephemeral Key
              </label>
            </>
          )}
          <input onClick={updateSigner} value="beacon" id="beacon" type="radio" />
          <label className={signer === "beacon" ? "signer-button-selected" : "signer-button"} htmlFor="beacon">
            Beacon
          </label>
          <input onClick={updateSigner} value="tezbridge" id="tezbridge" type="radio" />
          <label className={signer === "tezbridge" ? "signer-button-selected" : "signer-button"} htmlFor="tezbridge">
            TezBridge
          </label>
        </label>
        <div id="content">
          <div id="contract-launch-form">
            <form onSubmit={handleSubmit(handleLaunchSubmit)}>
              <input disabled={loading ? true : false} id="show-balance-button" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaunchForm;