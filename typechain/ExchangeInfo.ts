/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ExchangeInfoInterface extends utils.Interface {
  contractName: "ExchangeInfo";
  functions: {
    "assetAddress(string)": FunctionFragment;
    "assetContract(string)": FunctionFragment;
    "assetFundingfractionaverage(string)": FunctionFragment;
    "assetInfo(string)": FunctionFragment;
    "assetPrice(string)": FunctionFragment;
    "concatenation(string,string)": FunctionFragment;
    "fulfillFundingRate(bytes32,uint256[],int256[],string[],string[],address[])": FunctionFragment;
    "getMinimumLongAssetOut(address,uint256)": FunctionFragment;
    "getMinimumLongUsdOut(address,uint256)": FunctionFragment;
    "getMinimumShortAssetOut(address,uint256)": FunctionFragment;
    "getMinimumShortUsdOut(address,uint256)": FunctionFragment;
    "isFundingRateUsed(string)": FunctionFragment;
    "lastUpdateTime()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "requestFundingRate()": FunctionFragment;
    "setExternalJobId(bytes32)": FunctionFragment;
    "setFundingRateUsed(string,bool)": FunctionFragment;
    "setOracleAddress(address)": FunctionFragment;
    "setUrl(string,string)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawLink()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "assetAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "assetContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "assetFundingfractionaverage",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "assetInfo", values: [string]): string;
  encodeFunctionData(functionFragment: "assetPrice", values: [string]): string;
  encodeFunctionData(
    functionFragment: "concatenation",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfillFundingRate",
    values: [
      BytesLike,
      BigNumberish[],
      BigNumberish[],
      string[],
      string[],
      string[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinimumLongAssetOut",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinimumLongUsdOut",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinimumShortAssetOut",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinimumShortUsdOut",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isFundingRateUsed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdateTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestFundingRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setExternalJobId",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFundingRateUsed",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setOracleAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setUrl",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLink",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "assetAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetFundingfractionaverage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "assetInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "assetPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "concatenation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fulfillFundingRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinimumLongAssetOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinimumLongUsdOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinimumShortAssetOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinimumShortUsdOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isFundingRateUsed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdateTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestFundingRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExternalJobId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFundingRateUsed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOracleAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setUrl", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLink",
    data: BytesLike
  ): Result;

  events: {
    "ChainlinkCancelled(bytes32)": EventFragment;
    "ChainlinkFulfilled(bytes32)": EventFragment;
    "ChainlinkRequested(bytes32)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RequestFulfilled(bytes32,uint256,uint256,int256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChainlinkCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChainlinkFulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChainlinkRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestFulfilled"): EventFragment;
}

export type ChainlinkCancelledEvent = TypedEvent<[string], { id: string }>;

export type ChainlinkCancelledEventFilter =
  TypedEventFilter<ChainlinkCancelledEvent>;

export type ChainlinkFulfilledEvent = TypedEvent<[string], { id: string }>;

export type ChainlinkFulfilledEventFilter =
  TypedEventFilter<ChainlinkFulfilledEvent>;

export type ChainlinkRequestedEvent = TypedEvent<[string], { id: string }>;

export type ChainlinkRequestedEventFilter =
  TypedEventFilter<ChainlinkRequestedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type RequestFulfilledEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  {
    requestId: string;
    _number0: BigNumber;
    _number1: BigNumber;
    _number2: BigNumber;
  }
>;

export type RequestFulfilledEventFilter =
  TypedEventFilter<RequestFulfilledEvent>;

export interface ExchangeInfo extends BaseContract {
  contractName: "ExchangeInfo";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExchangeInfoInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    assetAddress(_name: string, overrides?: CallOverrides): Promise<[string]>;

    assetContract(_name: string, overrides?: CallOverrides): Promise<[string]>;

    assetFundingfractionaverage(
      _name: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    assetInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string, boolean] & {
        assetPrice: BigNumber;
        assetFundingfractionaverage: BigNumber;
        assetContract: string;
        assetAddress: string;
        fundingRateUsed: boolean;
      }
    >;

    assetPrice(_name: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    concatenation(
      a: string,
      b: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    fulfillFundingRate(
      requestId: BytesLike,
      _prices: BigNumberish[],
      _fundingfractionaverages: BigNumberish[],
      _names: string[],
      _contracts: string[],
      _addresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getMinimumLongAssetOut(
      _exchangeAddress: string,
      _usdAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMinimumLongUsdOut(
      _exchangeAddress: string,
      _AssetAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMinimumShortAssetOut(
      _exchangeAddress: string,
      _usdAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMinimumShortUsdOut(
      _exchangeAddress: string,
      _AssetAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isFundingRateUsed(
      _name: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    lastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestFundingRate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setExternalJobId(
      _jobId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFundingRateUsed(
      _name: string,
      _bool: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOracleAddress(
      _newOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUrl(
      _beforeAddress: string,
      _afterAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawLink(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  assetAddress(_name: string, overrides?: CallOverrides): Promise<string>;

  assetContract(_name: string, overrides?: CallOverrides): Promise<string>;

  assetFundingfractionaverage(
    _name: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  assetInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, string, boolean] & {
      assetPrice: BigNumber;
      assetFundingfractionaverage: BigNumber;
      assetContract: string;
      assetAddress: string;
      fundingRateUsed: boolean;
    }
  >;

  assetPrice(_name: string, overrides?: CallOverrides): Promise<BigNumber>;

  concatenation(
    a: string,
    b: string,
    overrides?: CallOverrides
  ): Promise<string>;

  fulfillFundingRate(
    requestId: BytesLike,
    _prices: BigNumberish[],
    _fundingfractionaverages: BigNumberish[],
    _names: string[],
    _contracts: string[],
    _addresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getMinimumLongAssetOut(
    _exchangeAddress: string,
    _usdAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMinimumLongUsdOut(
    _exchangeAddress: string,
    _AssetAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMinimumShortAssetOut(
    _exchangeAddress: string,
    _usdAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMinimumShortUsdOut(
    _exchangeAddress: string,
    _AssetAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isFundingRateUsed(_name: string, overrides?: CallOverrides): Promise<boolean>;

  lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestFundingRate(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setExternalJobId(
    _jobId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFundingRateUsed(
    _name: string,
    _bool: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOracleAddress(
    _newOracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUrl(
    _beforeAddress: string,
    _afterAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawLink(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    assetAddress(_name: string, overrides?: CallOverrides): Promise<string>;

    assetContract(_name: string, overrides?: CallOverrides): Promise<string>;

    assetFundingfractionaverage(
      _name: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    assetInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string, boolean] & {
        assetPrice: BigNumber;
        assetFundingfractionaverage: BigNumber;
        assetContract: string;
        assetAddress: string;
        fundingRateUsed: boolean;
      }
    >;

    assetPrice(_name: string, overrides?: CallOverrides): Promise<BigNumber>;

    concatenation(
      a: string,
      b: string,
      overrides?: CallOverrides
    ): Promise<string>;

    fulfillFundingRate(
      requestId: BytesLike,
      _prices: BigNumberish[],
      _fundingfractionaverages: BigNumberish[],
      _names: string[],
      _contracts: string[],
      _addresses: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    getMinimumLongAssetOut(
      _exchangeAddress: string,
      _usdAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinimumLongUsdOut(
      _exchangeAddress: string,
      _AssetAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinimumShortAssetOut(
      _exchangeAddress: string,
      _usdAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinimumShortUsdOut(
      _exchangeAddress: string,
      _AssetAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isFundingRateUsed(
      _name: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    requestFundingRate(overrides?: CallOverrides): Promise<string>;

    setExternalJobId(
      _jobId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setFundingRateUsed(
      _name: string,
      _bool: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setOracleAddress(
      _newOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setUrl(
      _beforeAddress: string,
      _afterAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawLink(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ChainlinkCancelled(bytes32)"(
      id?: BytesLike | null
    ): ChainlinkCancelledEventFilter;
    ChainlinkCancelled(id?: BytesLike | null): ChainlinkCancelledEventFilter;

    "ChainlinkFulfilled(bytes32)"(
      id?: BytesLike | null
    ): ChainlinkFulfilledEventFilter;
    ChainlinkFulfilled(id?: BytesLike | null): ChainlinkFulfilledEventFilter;

    "ChainlinkRequested(bytes32)"(
      id?: BytesLike | null
    ): ChainlinkRequestedEventFilter;
    ChainlinkRequested(id?: BytesLike | null): ChainlinkRequestedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "RequestFulfilled(bytes32,uint256,uint256,int256)"(
      requestId?: BytesLike | null,
      _number0?: null,
      _number1?: null,
      _number2?: null
    ): RequestFulfilledEventFilter;
    RequestFulfilled(
      requestId?: BytesLike | null,
      _number0?: null,
      _number1?: null,
      _number2?: null
    ): RequestFulfilledEventFilter;
  };

  estimateGas: {
    assetAddress(_name: string, overrides?: CallOverrides): Promise<BigNumber>;

    assetContract(_name: string, overrides?: CallOverrides): Promise<BigNumber>;

    assetFundingfractionaverage(
      _name: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    assetInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    assetPrice(_name: string, overrides?: CallOverrides): Promise<BigNumber>;

    concatenation(
      a: string,
      b: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fulfillFundingRate(
      requestId: BytesLike,
      _prices: BigNumberish[],
      _fundingfractionaverages: BigNumberish[],
      _names: string[],
      _contracts: string[],
      _addresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getMinimumLongAssetOut(
      _exchangeAddress: string,
      _usdAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinimumLongUsdOut(
      _exchangeAddress: string,
      _AssetAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinimumShortAssetOut(
      _exchangeAddress: string,
      _usdAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinimumShortUsdOut(
      _exchangeAddress: string,
      _AssetAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isFundingRateUsed(
      _name: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestFundingRate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setExternalJobId(
      _jobId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFundingRateUsed(
      _name: string,
      _bool: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOracleAddress(
      _newOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUrl(
      _beforeAddress: string,
      _afterAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawLink(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    assetAddress(
      _name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    assetContract(
      _name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    assetFundingfractionaverage(
      _name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    assetInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    assetPrice(
      _name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    concatenation(
      a: string,
      b: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fulfillFundingRate(
      requestId: BytesLike,
      _prices: BigNumberish[],
      _fundingfractionaverages: BigNumberish[],
      _names: string[],
      _contracts: string[],
      _addresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getMinimumLongAssetOut(
      _exchangeAddress: string,
      _usdAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMinimumLongUsdOut(
      _exchangeAddress: string,
      _AssetAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMinimumShortAssetOut(
      _exchangeAddress: string,
      _usdAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMinimumShortUsdOut(
      _exchangeAddress: string,
      _AssetAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isFundingRateUsed(
      _name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestFundingRate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setExternalJobId(
      _jobId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFundingRateUsed(
      _name: string,
      _bool: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOracleAddress(
      _newOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUrl(
      _beforeAddress: string,
      _afterAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawLink(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
