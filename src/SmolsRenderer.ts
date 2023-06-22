export default [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "collectionDescription",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint24", name: "background", type: "uint24" },
          { internalType: "uint24", name: "body", type: "uint24" },
          { internalType: "uint24", name: "clothes", type: "uint24" },
          { internalType: "uint24", name: "mouth", type: "uint24" },
          { internalType: "uint24", name: "glasses", type: "uint24" },
          { internalType: "uint24", name: "hat", type: "uint24" },
          { internalType: "uint24", name: "hair", type: "uint24" },
          { internalType: "uint24", name: "skin", type: "uint24" },
          { internalType: "uint8", name: "gender", type: "uint8" },
          { internalType: "uint8", name: "headSize", type: "uint8" },
        ],
        internalType: "struct Smol",
        name: "_smol",
        type: "tuple",
      },
      { internalType: "uint256", name: "_tokenId", type: "uint256" },
    ],
    name: "generateMetadata",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint24", name: "background", type: "uint24" },
          { internalType: "uint24", name: "body", type: "uint24" },
          { internalType: "uint24", name: "clothes", type: "uint24" },
          { internalType: "uint24", name: "mouth", type: "uint24" },
          { internalType: "uint24", name: "glasses", type: "uint24" },
          { internalType: "uint24", name: "hat", type: "uint24" },
          { internalType: "uint24", name: "hair", type: "uint24" },
          { internalType: "uint24", name: "skin", type: "uint24" },
          { internalType: "uint8", name: "gender", type: "uint8" },
          { internalType: "uint8", name: "headSize", type: "uint8" },
        ],
        internalType: "struct Smol",
        name: "_smol",
        type: "tuple",
      },
      { internalType: "uint256", name: "_tokenId", type: "uint256" },
    ],
    name: "generateMetadataStringForIQAndHeadsize",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_traitId", type: "uint256" },
      { internalType: "uint8", name: "_gender", type: "uint8" },
      {
        internalType: "uint256",
        name: "_dependencyLevel",
        type: "uint256",
      },
    ],
    name: "generatePNGFromTraitId",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint24", name: "background", type: "uint24" },
          { internalType: "uint24", name: "body", type: "uint24" },
          { internalType: "uint24", name: "clothes", type: "uint24" },
          { internalType: "uint24", name: "mouth", type: "uint24" },
          { internalType: "uint24", name: "glasses", type: "uint24" },
          { internalType: "uint24", name: "hat", type: "uint24" },
          { internalType: "uint24", name: "hair", type: "uint24" },
          { internalType: "uint24", name: "skin", type: "uint24" },
          { internalType: "uint8", name: "gender", type: "uint8" },
          { internalType: "uint8", name: "headSize", type: "uint8" },
        ],
        internalType: "struct Smol",
        name: "_smol",
        type: "tuple",
      },
    ],
    name: "generateSVG",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    name: "getRoleMember",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleMemberCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "getSmol",
    outputs: [
      {
        components: [
          { internalType: "uint24", name: "background", type: "uint24" },
          { internalType: "uint24", name: "body", type: "uint24" },
          { internalType: "uint24", name: "clothes", type: "uint24" },
          { internalType: "uint24", name: "mouth", type: "uint24" },
          { internalType: "uint24", name: "glasses", type: "uint24" },
          { internalType: "uint24", name: "hat", type: "uint24" },
          { internalType: "uint24", name: "hair", type: "uint24" },
          { internalType: "uint24", name: "skin", type: "uint24" },
          { internalType: "uint8", name: "gender", type: "uint8" },
          { internalType: "uint8", name: "headSize", type: "uint8" },
        ],
        internalType: "struct Smol",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "_role", type: "bytes32" },
      { internalType: "address", name: "_account", type: "address" },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "hasRole",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "iqPerHeadSize",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "namePrefix",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "_role", type: "bytes32" },
      { internalType: "address", name: "_account", type: "address" },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_collectionDescription",
        type: "string",
      },
      { internalType: "string", name: "_namePrefix", type: "string" },
    ],
    name: "setCollectionData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_smolsAddressRegistry",
        type: "address",
      },
    ],
    name: "setSmolsAddressRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
];