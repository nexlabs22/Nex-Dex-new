/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ExchangePriceListener,
  ExchangePriceListenerInterface,
} from "../ExchangePriceListener";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_exchange",
        type: "address",
      },
      {
        internalType: "address",
        name: "_exchangeInfo",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "exchange",
    outputs: [
      {
        internalType: "contract Exchange",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "exchangeInfo",
    outputs: [
      {
        internalType: "contract ExchangeInfo",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdateTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_exchange",
        type: "address",
      },
    ],
    name: "setExchange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_exchangeInfo",
        type: "address",
      },
    ],
    name: "setExchangeInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516108b63803806108b683398101604081905261002f916100d5565b61003833610069565b600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055610108565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100d057600080fd5b919050565b600080604083850312156100e857600080fd5b6100f1836100b9565b91506100ff602084016100b9565b90509250929050565b61079f806101176000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638da5cb5b116100665780638da5cb5b14610110578063c8f33c9114610135578063d2f7265a1461014c578063e5e4390f1461015f578063f2fde38b1461017257600080fd5b80634585e33b146100a35780635c340a02146100b857806367b1f5df146100cb5780636e04ff0d146100de578063715018a614610108575b600080fd5b6100b66100b1366004610609565b610185565b005b6100b66100c636600461067b565b610333565b6100b66100d936600461067b565b61035d565b6100f16100ec366004610609565b610387565b6040516100ff9291906106ab565b60405180910390f35b6100b66104cd565b6000546001600160a01b03165b6040516001600160a01b0390911681526020016100ff565b61013e60035481565b6040519081526020016100ff565b60015461011d906001600160a01b031681565b60025461011d906001600160a01b031681565b6100b661018036600461067b565b6104e1565b600154604080516308b42a7160e31b815290516000926001600160a01b0316916345a153889160048083019260209291908290030181865afa1580156101cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f39190610703565b90506000600260009054906101000a90046001600160a01b03166001600160a01b031663b71ebfaf6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561024a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026e9190610703565b9050605a8161027e84606461071c565b6102889190610747565b10806102a95750606e8161029d84606461071c565b6102a79190610747565b115b1561032957600260009054906101000a90046001600160a01b03166001600160a01b0316634309e5df6040518163ffffffff1660e01b81526004016020604051808303816000875af1158015610303573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103279190610703565b505b5050426003555050565b61033b61055f565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b61036561055f565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600060606000600160009054906101000a90046001600160a01b03166001600160a01b03166345a153886040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104049190610703565b90506000600260009054906101000a90046001600160a01b03166001600160a01b031663b71ebfaf6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561045b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047f9190610703565b9050605a8161048f84606461071c565b6104999190610747565b10806104ba5750606e816104ae84606461071c565b6104b89190610747565b115b156104c457600193505b50509250929050565b6104d561055f565b6104df60006105b9565b565b6104e961055f565b6001600160a01b0381166105535760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61055c816105b9565b50565b6000546001600160a01b031633146104df5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161054a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000806020838503121561061c57600080fd5b823567ffffffffffffffff8082111561063457600080fd5b818501915085601f83011261064857600080fd5b81358181111561065757600080fd5b86602082850101111561066957600080fd5b60209290920196919550909350505050565b60006020828403121561068d57600080fd5b81356001600160a01b03811681146106a457600080fd5b9392505050565b821515815260006020604081840152835180604085015260005b818110156106e1578581018301518582016060015282016106c5565b506000606082860101526060601f19601f830116850101925050509392505050565b60006020828403121561071557600080fd5b5051919050565b808202811582820484141761074157634e487b7160e01b600052601160045260246000fd5b92915050565b60008261076457634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220dffca00272096221e0878091582b4fa0b2dd6411df68491050d6d2725264d15064736f6c63430008110033";

type ExchangePriceListenerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExchangePriceListenerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExchangePriceListener__factory extends ContractFactory {
  constructor(...args: ExchangePriceListenerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ExchangePriceListener";
  }

  deploy(
    _exchange: string,
    _exchangeInfo: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ExchangePriceListener> {
    return super.deploy(
      _exchange,
      _exchangeInfo,
      overrides || {}
    ) as Promise<ExchangePriceListener>;
  }
  getDeployTransaction(
    _exchange: string,
    _exchangeInfo: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _exchange,
      _exchangeInfo,
      overrides || {}
    );
  }
  attach(address: string): ExchangePriceListener {
    return super.attach(address) as ExchangePriceListener;
  }
  connect(signer: Signer): ExchangePriceListener__factory {
    return super.connect(signer) as ExchangePriceListener__factory;
  }
  static readonly contractName: "ExchangePriceListener";
  public readonly contractName: "ExchangePriceListener";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExchangePriceListenerInterface {
    return new utils.Interface(_abi) as ExchangePriceListenerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExchangePriceListener {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ExchangePriceListener;
  }
}
