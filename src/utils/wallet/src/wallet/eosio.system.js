module.exports = {
  "version": "eosio::abi/1.1",
  "types": [],
  "structs": [{
      "name": "abi_hash",
      "base": "",
      "fields": [{
          "name": "owner",
          "type": "name"
        }, {
          "name": "hash",
          "type": "checksum256"
        }
      ]
    }, {
      "name": "activate",
      "base": "",
      "fields": [{
          "name": "feature_digest",
          "type": "checksum256"
        }
      ]
    }, {
      "name": "authority",
      "base": "",
      "fields": [{
          "name": "threshold",
          "type": "uint32"
        }, {
          "name": "keys",
          "type": "key_weight[]"
        }, {
          "name": "accounts",
          "type": "permission_level_weight[]"
        }, {
          "name": "waits",
          "type": "wait_weight[]"
        }
      ]
    }, {
      "name": "bid_refund",
      "base": "",
      "fields": [{
          "name": "bidder",
          "type": "name"
        }, {
          "name": "amount",
          "type": "asset"
        }
      ]
    }, {
      "name": "bidname",
      "base": "",
      "fields": [{
          "name": "bidder",
          "type": "name"
        }, {
          "name": "newname",
          "type": "name"
        }, {
          "name": "bid",
          "type": "asset"
        }
      ]
    }, {
      "name": "bidrefund",
      "base": "",
      "fields": [{
          "name": "bidder",
          "type": "name"
        }, {
          "name": "newname",
          "type": "name"
        }
      ]
    }, {
      "name": "block_header",
      "base": "",
      "fields": [{
          "name": "timestamp",
          "type": "uint32"
        }, {
          "name": "producer",
          "type": "name"
        }, {
          "name": "confirmed",
          "type": "uint16"
        }, {
          "name": "previous",
          "type": "checksum256"
        }, {
          "name": "transaction_mroot",
          "type": "checksum256"
        }, {
          "name": "action_mroot",
          "type": "checksum256"
        }, {
          "name": "schedule_version",
          "type": "uint32"
        }, {
          "name": "new_producers",
          "type": "producer_schedule?"
        }
      ]
    }, {
      "name": "block_signing_authority",
      "base": "",
      "fields": [{
          "name": "threshold",
          "type": "uint32"
        }, {
          "name": "keys",
          "type": "key_weight[]"
        }
      ]
    }, {
      "name": "blockchain_parameters",
      "base": "",
      "fields": [{
          "name": "max_block_net_usage",
          "type": "uint64"
        }, {
          "name": "target_block_net_usage_pct",
          "type": "uint32"
        }, {
          "name": "max_transaction_net_usage",
          "type": "uint32"
        }, {
          "name": "base_per_transaction_net_usage",
          "type": "uint32"
        }, {
          "name": "net_usage_leeway",
          "type": "uint32"
        }, {
          "name": "context_free_discount_net_usage_num",
          "type": "uint32"
        }, {
          "name": "context_free_discount_net_usage_den",
          "type": "uint32"
        }, {
          "name": "max_block_cpu_usage",
          "type": "uint32"
        }, {
          "name": "target_block_cpu_usage_pct",
          "type": "uint32"
        }, {
          "name": "max_transaction_cpu_usage",
          "type": "uint32"
        }, {
          "name": "min_transaction_cpu_usage",
          "type": "uint32"
        }, {
          "name": "max_transaction_lifetime",
          "type": "uint32"
        }, {
          "name": "deferred_trx_expiration_window",
          "type": "uint32"
        }, {
          "name": "max_transaction_delay",
          "type": "uint32"
        }, {
          "name": "max_inline_action_size",
          "type": "uint32"
        }, {
          "name": "max_inline_action_depth",
          "type": "uint16"
        }, {
          "name": "max_authority_depth",
          "type": "uint16"
        }
      ]
    }, {
      "name": "buyram",
      "base": "",
      "fields": [{
          "name": "payer",
          "type": "name"
        }, {
          "name": "receiver",
          "type": "name"
        }, {
          "name": "quant",
          "type": "asset"
        }
      ]
    }, {
      "name": "buyrambytes",
      "base": "",
      "fields": [{
          "name": "payer",
          "type": "name"
        }, {
          "name": "receiver",
          "type": "name"
        }, {
          "name": "bytes",
          "type": "uint32"
        }
      ]
    }, {
      "name": "buyrex",
      "base": "",
      "fields": [{
          "name": "from",
          "type": "name"
        }, {
          "name": "amount",
          "type": "asset"
        }
      ]
    }, {
      "name": "canceldelay",
      "base": "",
      "fields": [{
          "name": "canceling_auth",
          "type": "permission_level"
        }, {
          "name": "trx_id",
          "type": "checksum256"
        }
      ]
    }, {
      "name": "cfgpowerup",
      "base": "",
      "fields": [{
          "name": "args",
          "type": "powerup_config"
        }
      ]
    }, {
      "name": "claimrewards",
      "base": "",
      "fields": [{
          "name": "owner",
          "type": "name"
        }
      ]
    }, {
      "name": "closerex",
      "base": "",
      "fields": [{
          "name": "owner",
          "type": "name"
        }
      ]
    }, {
      "name": "cnclrexorder",
      "base": "",
      "fields": [{
          "name": "owner",
          "type": "name"
        }
      ]
    }, {
      "name": "connector",
      "base": "",
      "fields": [{
          "name": "balance",
          "type": "asset"
        }, {
          "name": "weight",
          "type": "float64"
        }
      ]
    }, {
      "name": "consolidate",
      "base": "",
      "fields": [{
          "name": "owner",
          "type": "name"
        }
      ]
    }, {
      "name": "defcpuloan",
      "base": "",
      "fields": [{
          "name": "from",
          "type": "name"
        }, {
          "name": "loan_num",
          "type": "uint64"
        }, {
          "name": "amount",
          "type": "asset"
        }
      ]
    }, {
      "name": "defnetloan",
      "base": "",
      "fields": [{
          "name": "from",
          "type": "name"
        }, {
          "name": "loan_num",
          "type": "uint64"
        }, {
          "name": "amount",
          "type": "asset"
        }
      ]
    }, {
      "name": "delegatebw",
      "base": "",
      "fields": [{
          "name": "from",
          "type": "name"
        }, {
          "name": "receiver",
          "type": "name"
        }, {
          "name": "stake_net_quantity",
          "type": "asset"
        }, {
          "name": "stake_cpu_quantity",
          "type": "asset"
        }, {
          "name": "transfer",
          "type": "bool"
        }
      ]
    }, {
      "name": "delegated_bandwidth",
      "base": "",
      "fields": [{
          "name": "from",
          "type": "name"
        }, {
          "name": "to",
          "type": "name"
        }, {
          "name": "net_weight",
          "type": "asset"
        }, {
          "name": "cpu_weight",
          "type": "asset"
        }
      ]
    }, {
      "name": "deleteauth",
      "base": "",
      "fields": [{
          "name": "account",
          "type": "name"
        }, {
          "name": "permission",
          "type": "name"
        }
      ]
    }, {
      "name": "deposit",
      "base": "",
      "fields": [{
          "name": "owner",
          "type": "name"
        }, {
          "name": "amount",
          "type": "asset"
        }
      ]
    }, {
      "name": "eosio_global_state",
      "base": "blockchain_parameters",
      "fields": [{
          "name": "max_ram_size",
          "type": "uint64"
        }, {
          "name": "total_ram_bytes_reserved",
          "type": "uint64"
        }, {
          "name": "total_ram_stake",
          "type": "int64"
        }, {
          "name": "last_producer_schedule_update",
          "type": "block_timestamp_type"
        }, {
          "name": "last_pervote_bucket_fill",
          "type": "time_point"
        }, {
          "name": "pervote_bucket",
          "type": "int64"
        }, {
          "name": "perblock_bucket",
          "type": "int64"
        }, {
          "name": "total_unpaid_blocks",
          "type": "uint32"
        }, {
          "name": "total_activated_stake",
          "type": "int64"
        }, {
          "name": "thresh_activated_stake_time",
          "type": "time_point"
        }, {
          "name": "last_producer_schedule_size",
          "type": "uint16"
        }, {
          "name": "total_producer_vote_weight",
          "type": "float64"
        }, {
          "name": "last_name_close",
          "type": "block_timestamp_type"
        }
      ]
    }, {
      "name": "eosio_global_state2",
      "base": "",
      "fields": [{
          "name": "new_ram_per_block",
          "type": "uint16"
        }, {
          "name": "last_ram_increase",
          "type": "block_timestamp_type"
        }, {
          "name": "last_block_num",
          "type": "block_timestamp_type"
        }, {
          "name": "total_producer_votepay_share",
          "type": "float64"
        }, {
          "name": "revision",
          "type": "uint8"
        }
      ]
    }, {
      "name": "eosio_global_state3",
      "base": "",
      "fields": [{
          "name": "last_vpay_state_update",
          "type": "time_point"
        }, {
          "name": "total_vpay_share_change_rate",
          "type": "float64"
        }
      ]
    }, {
      "name": "eosio_global_state4",
      "base": "",
      "fields": [{
          "name": "continuous_rate",
          "type": "float64"
        }, {
          "name": "inflation_pay_factor",
          "type": "int64"
        }, {
          "name": "votepay_factor",
          "type": "int64"
        }
      ]
    }, {
      "name": "exchange_state",
      "base": "",
      "fields": [{
          "name": "supply",
          "type": "asset"
        }, {
          "name": "base",
          "type": "connector"
        }, {
          "name": "quote",
          "type": "connector"
        }
      ]
    }, {
      "name": "fundcpuloan",
      "base": "",
      "fields": [{
          "name": "from",
          "type": "name"
        }, {
          "name": "loan_num",
          "type": "uint64"
        }, {
          "name": "payment",
          "type": "asset"
        }
      ]
    }, {
      "name": "fundnetloan",
      "base": "",
      "fields": [{
          "name": "from",
          "type": "name"
        }, {
          "name": "loan_num",
          "type": "uint64"
        }, {
          "name": "payment",
          "type": "asset"
        }
      ]
    }, {
      "name": "init",
      "base": "",
      "fields": [{
          "name": "version",
          "type": "varuint32"
        }, {
          "name": "core",
          "type": "symbol"
        }
      ]
    }, {
      "name": "key_weight",
      "base": "",
      "fields": [{
          "name": "key",
          "type": "public_key"
        }, {
          "name": "weight",
          "type": "uint16"
        }
      ]
    }, {
      "name": "linkauth",
      "base": "",
      "fields": [{
          "name": "account",
          "type": "name"
        }, {
          "name": "code",
          "type": "name"
        }, {
          "name": "type",
          "type": "name"
        }, {
          "name": "requirement",
          "type": "name"
        }
      ]
    }, {
      "name": "mvfrsavings",
      "base": "",
      "fields": [{
          "name": "owner",
          "type": "name"
        }, {
          "name": "rex",
          "type": "asset"
        }
      ]
    }, {
      "name": "mvtosavings",
      "base": "",
      "fields": [{
          "name": "owner",
          "type": "name"
        }, {
          "name": "rex",
          "type": "asset"
        }
      ]
    }, {
      "name": "name_bid",
      "base": "",
      "fields": [{
          "name": "newname",
          "type": "name"
        }, {
          "name": "high_bidder",
          "type": "name"
        }, {
          "name": "high_bid",
          "type": "int64"
        }, {
          "name": "last_bid_time",
          "type": "time_point"
        }
      ]
    }, {
      "name": "newaccount",
      "base": "",
      "fields": [{
          "name": "creator",
          "type": "name"
        }, {
          "name": "name",
          "type": "name"
        }, {
          "name": "owner",
          "type": "authority"
        }, {
          "name": "active",
          "type": "authority"
        }
      ]
    }, {
      "name": "onblock",
      "base": "",
      "fields": [{
          "name": "header",
          "type": "block_header"
        }
      ]
    }, {
      "name": "onerror",
      "base": "",
      "fields": [{
          "name": "sender_id",
          "type": "uint128"
        }, {
          "name": "sent_trx",
          "type": "bytes"
        }
      ]
    }, {
      "name": "pair_time_point_sec_int64",
      "base": "",
      "fields": [{
          "name": "key",
          "type": "time_point_sec"
        }, {
          "name": "value",
          "type": "int64"
        }
      ]
    }, {
      "name": "permission_level",
      "base": "",
      "fields": [{
          "name": "actor",
          "type": "name"
        }, {
          "name": "permission",
          "type": "name"
        }
      ]
    }, {
      "name": "permission_level_weight",
      "base": "",
      "fields": [{
          "name": "permission",
          "type": "permission_level"
        }, {
          "name": "weight",
          "type": "uint16"
        }
      ]
    }, {
      "name": "powerup",
      "base": "",
      "fields": [{
          "name": "payer",
          "type": "name"
        }, {
          "name": "receiver",
          "type": "name"
        }, {
          "name": "days",
          "type": "uint32"
        }, {
          "name": "net_frac",
          "type": "int64"
        }, {
          "name": "cpu_frac",
          "type": "int64"
        }, {
          "name": "max_payment",
          "type": "asset"
        }
      ]
    }, {
      "name": "powerup_config",
      "base": "",
      "fields": [{
          "name": "net",
          "type": "powerup_config_resource"
        }, {
          "name": "cpu",
          "type": "powerup_config_resource"
        }, {
          "name": "powerup_days",
          "type": "uint32?"
        }, {
          "name": "min_powerup_fee",
          "type": "asset?"
        }
      ]
    }, {
      "name": "powerup_config_resource",
      "base": "",
      "fields": [{
          "name": "current_weight_ratio",
          "type": "int64?"
        }, {
          "name": "target_weight_ratio",
          "type": "int64?"
        }, {
          "name": "assumed_stake_weight",
          "type": "int64?"
        }, {
          "name": "target_timestamp",
          "type": "time_point_sec?"
        }, {
          "name": "exponent",
          "type": "float64?"
        }, {
          "name": "decay_secs",
          "type": "uint32?"
        }, {
          "name": "min_price",
          "type": "asset?"
        }, {
          "name": "max_price",
          "type": "asset?"
        }
      ]
    }, {
      "name": "powerup_order",
      "base": "",
      "fields": [{
          "name": "version",
          "type": "uint8"
        }, {
          "name": "id",
          "type": "uint64"
        }, {
          "name": "owner",
          "type": "name"
        }, {
          "name": "net_weight",
          "type": "int64"
        }, {
          "name": "cpu_weight",
          "type": "int64"
        }, {
          "name": "expires",
          "type": "time_point_sec"
        }
      ]
    }, {
      "name": "powerup_state",
      "base": "",
      "fields": [{
          "name": "version",
          "type": "uint8"
        }, {
          "name": "net",
          "type": "powerup_state_resource"
        }, {
          "name": "cpu",
          "type": "powerup_state_resource"
        }, {
          "name": "powerup_days",
          "type": "uint32"
        }, {
          "name": "min_powerup_fee",
          "type": "asset"
        }
      ]
    }, {
      "name": "powerup_state_resource",
      "base": "",
      "fields": [{
          "name": "version",
          "type": "uint8"
        }, {
          "name": "weight",
          "type": "int64"
        }, {
          "name": "weight_ratio",
          "type": "int64"
        }, {
          "name": "assumed_stake_weight",
          "type": "int64"
        }, {
          "name": "initial_weight_ratio",
          "type": "int64"
        }, {
          "name": "target_weight_ratio",
          "type": "int64"
        }, {
          "name": "initial_timestamp",
          "type": "time_point_sec"
        }, {
          "name": "target_timestamp",
          "type": "time_point_sec"
        }, {
          "name": "exponent",
          "type": "float64"
        }, {
          "name": "decay_secs",
          "type": "uint32"
        }, {
          "name": "min_price",
          "type": "asset"
        }, {
          "name": "max_price",
          "type": "asset"
        }, {
          "name": "utilization",
          "type": "int64"
        }, {
          "name": "adjusted_utilization",
          "type": "int64"
        }, {
          "name": "utilization_timestamp",
          "type": "time_point_sec"
        }
      ]
    }, {
      "name": "powerupexec",
      "base": "",
      "fields": [{
          "name": "user",
          "type": "name"
        }, {
          "name": "max",
          "type": "uint16"
        }
      ]
    }, {
      "name": "producer_info",
      "base": "",
      "fields": [{
          "name": "owner",
          "type": "name"
        }, {
          "name": "total_votes",
          "type": "float64"
        }, {
          "name": "producer_key",
          "type": "public_key"
        }, {
          "name": "is_active",
          "type": "bool"
        }, {
          "name": "url",
          "type": "string"
        }, {
          "name": "unpaid_blocks",
          "type": "uint32"
        }, {
          "name": "last_claim_time",
          "type": "time_point"
        }, {
          "name": "location",
          "type": "uint16"
        }, {
          "name": "producer_authority",
          "type": "block_signing_authority"
        }
      ]
    }, {
      "name": "producer_info2",
      "base": "",
      "fields": [{
          "name": "owner",
          "type": "name"
        }, {
          "name": "votepay_share",
          "type": "float64"
        }, {
          "name": "last_votepay_share_update",
          "type": "time_point"
        }
      ]
    }, {
      "name": "producer_key",
      "base": "",
      "fields": [{
          "name": "producer_name",
          "type": "name"
        }, {
          "name": "block_signing_key",
          "type": "public_key"
        }
      ]
    }, {
      "name": "producer_schedule",
      "base": "",
      "fields": [{
          "name": "version",
          "type": "uint32"
        }, {
          "name": "producers",
          "type": "producer_key[]"
        }
      ]
    }, {
      "name": "refund",
      "base": "",
      "fields": [{
          "name": "owner",
          "type": "name"
        }
      ]
    }, {
      "name": "refund_request",
      "base": "",
      "fields": [{
          "name": "owner",
          "type": "name"
        }, {
          "name": "request_time",
          "type": "time_point_sec"
        }, {
          "name": "net_amount",
          "type": "asset"
        }, {
          "name": "cpu_amount",
          "type": "asset"
        }
      ]
    }, {
      "name": "regproducer",
      "base": "",
      "fields": [{
          "name": "producer",
          "type": "name"
        }, {
          "name": "producer_key",
          "type": "public_key"
        }, {
          "name": "url",
          "type": "string"
        }, {
          "name": "location",
          "type": "uint16"
        }
      ]
    }, {
      "name": "regproducer2",
      "base": "",
      "fields": [{
          "name": "producer",
          "type": "name"
        }, {
          "name": "producer_authority",
          "type": "block_signing_authority"
        }, {
          "name": "url",
          "type": "string"
        }, {
          "name": "location",
          "type": "uint16"
        }
      ]
    }, {
      "name": "regproxy",
      "base": "",
      "fields": [{
          "name": "proxy",
          "type": "name"
        }, {
          "name": "isproxy",
          "type": "bool"
        }
      ]
    }, {
      "name": "rentcpu",
      "base": "",
      "fields": [{
          "name": "from",
          "type": "name"
        }, {
          "name": "receiver",
          "type": "name"
        }, {
          "name": "loan_payment",
          "type": "asset"
        }, {
          "name": "loan_fund",
          "type": "asset"
        }
      ]
    }, {
      "name": "rentnet",
      "base": "",
      "fields": [{
          "name": "from",
          "type": "name"
        }, {
          "name": "receiver",
          "type": "name"
        }, {
          "name": "loan_payment",
          "type": "asset"
        }, {
          "name": "loan_fund",
          "type": "asset"
        }
      ]
    }, {
      "name": "rex_balance",
      "base": "",
      "fields": [{
          "name": "version",
          "type": "uint8"
        }, {
          "name": "owner",
          "type": "name"
        }, {
          "name": "vote_stake",
          "type": "asset"
        }, {
          "name": "rex_balance",
          "type": "asset"
        }, {
          "name": "matured_rex",
          "type": "int64"
        }, {
          "name": "rex_maturities",
          "type": "pair_time_point_sec_int64[]"
        }
      ]
    }, {
      "name": "rex_fund",
      "base": "",
      "fields": [{
          "name": "version",
          "type": "uint8"
        }, {
          "name": "owner",
          "type": "name"
        }, {
          "name": "balance",
          "type": "asset"
        }
      ]
    }, {
      "name": "rex_loan",
      "base": "",
      "fields": [{
          "name": "version",
          "type": "uint8"
        }, {
          "name": "from",
          "type": "name"
        }, {
          "name": "receiver",
          "type": "name"
        }, {
          "name": "payment",
          "type": "asset"
        }, {
          "name": "balance",
          "type": "asset"
        }, {
          "name": "total_staked",
          "type": "asset"
        }, {
          "name": "loan_num",
          "type": "uint64"
        }, {
          "name": "expiration",
          "type": "time_point"
        }
      ]
    }, {
      "name": "rex_order",
      "base": "",
      "fields": [{
          "name": "version",
          "type": "uint8"
        }, {
          "name": "owner",
          "type": "name"
        }, {
          "name": "rex_requested",
          "type": "asset"
        }, {
          "name": "proceeds",
          "type": "asset"
        }, {
          "name": "stake_change",
          "type": "asset"
        }, {
          "name": "order_time",
          "type": "time_point"
        }, {
          "name": "is_open",
          "type": "bool"
        }
      ]
    }, {
      "name": "rex_pool",
      "base": "",
      "fields": [{
          "name": "version",
          "type": "uint8"
        }, {
          "name": "total_lent",
          "type": "asset"
        }, {
          "name": "total_unlent",
          "type": "asset"
        }, {
          "name": "total_rent",
          "type": "asset"
        }, {
          "name": "total_lendable",
          "type": "asset"
        }, {
          "name": "total_rex",
          "type": "asset"
        }, {
          "name": "namebid_proceeds",
          "type": "asset"
        }, {
          "name": "loan_num",
          "type": "uint64"
        }
      ]
    }, {
      "name": "rex_return_buckets",
      "base": "",
      "fields": [{
          "name": "version",
          "type": "uint8"
        }, {
          "name": "return_buckets",
          "type": "pair_time_point_sec_int64[]"
        }
      ]
    }, {
      "name": "rex_return_pool",
      "base": "",
      "fields": [{
          "name": "version",
          "type": "uint8"
        }, {
          "name": "last_dist_time",
          "type": "time_point_sec"
        }, {
          "name": "pending_bucket_time",
          "type": "time_point_sec"
        }, {
          "name": "oldest_bucket_time",
          "type": "time_point_sec"
        }, {
          "name": "pending_bucket_proceeds",
          "type": "int64"
        }, {
          "name": "current_rate_of_increase",
          "type": "int64"
        }, {
          "name": "proceeds",
          "type": "int64"
        }
      ]
    }, {
      "name": "rexexec",
      "base": "",
      "fields": [{
          "name": "user",
          "type": "name"
        }, {
          "name": "max",
          "type": "uint16"
        }
      ]
    }, {
      "name": "rmvproducer",
      "base": "",
      "fields": [{
          "name": "producer",
          "type": "name"
        }
      ]
    }, {
      "name": "sellram",
      "base": "",
      "fields": [{
          "name": "account",
          "type": "name"
        }, {
          "name": "bytes",
          "type": "int64"
        }
      ]
    }, {
      "name": "sellrex",
      "base": "",
      "fields": [{
          "name": "from",
          "type": "name"
        }, {
          "name": "rex",
          "type": "asset"
        }
      ]
    }, {
      "name": "setabi",
      "base": "",
      "fields": [{
          "name": "account",
          "type": "name"
        }, {
          "name": "abi",
          "type": "bytes"
        }
      ]
    }, {
      "name": "setacctcpu",
      "base": "",
      "fields": [{
          "name": "account",
          "type": "name"
        }, {
          "name": "cpu_weight",
          "type": "int64?"
        }
      ]
    }, {
      "name": "setacctnet",
      "base": "",
      "fields": [{
          "name": "account",
          "type": "name"
        }, {
          "name": "net_weight",
          "type": "int64?"
        }
      ]
    }, {
      "name": "setacctram",
      "base": "",
      "fields": [{
          "name": "account",
          "type": "name"
        }, {
          "name": "ram_bytes",
          "type": "int64?"
        }
      ]
    }, {
      "name": "setalimits",
      "base": "",
      "fields": [{
          "name": "account",
          "type": "name"
        }, {
          "name": "ram_bytes",
          "type": "int64"
        }, {
          "name": "net_weight",
          "type": "int64"
        }, {
          "name": "cpu_weight",
          "type": "int64"
        }
      ]
    }, {
      "name": "setcode",
      "base": "",
      "fields": [{
          "name": "account",
          "type": "name"
        }, {
          "name": "vmtype",
          "type": "uint8"
        }, {
          "name": "vmversion",
          "type": "uint8"
        }, {
          "name": "code",
          "type": "bytes"
        }
      ]
    }, {
      "name": "setinflation",
      "base": "",
      "fields": [{
          "name": "annual_rate",
          "type": "int64"
        }, {
          "name": "inflation_pay_factor",
          "type": "int64"
        }, {
          "name": "votepay_factor",
          "type": "int64"
        }
      ]
    }, {
      "name": "setparams",
      "base": "",
      "fields": [{
          "name": "params",
          "type": "blockchain_parameters"
        }
      ]
    }, {
      "name": "setpriv",
      "base": "",
      "fields": [{
          "name": "account",
          "type": "name"
        }, {
          "name": "is_priv",
          "type": "uint8"
        }
      ]
    }, {
      "name": "setram",
      "base": "",
      "fields": [{
          "name": "max_ram_size",
          "type": "uint64"
        }
      ]
    }, {
      "name": "setramrate",
      "base": "",
      "fields": [{
          "name": "bytes_per_block",
          "type": "uint16"
        }
      ]
    }, {
      "name": "setrex",
      "base": "",
      "fields": [{
          "name": "balance",
          "type": "asset"
        }
      ]
    }, {
      "name": "undelegatebw",
      "base": "",
      "fields": [{
          "name": "from",
          "type": "name"
        }, {
          "name": "receiver",
          "type": "name"
        }, {
          "name": "unstake_net_quantity",
          "type": "asset"
        }, {
          "name": "unstake_cpu_quantity",
          "type": "asset"
        }
      ]
    }, {
      "name": "unlinkauth",
      "base": "",
      "fields": [{
          "name": "account",
          "type": "name"
        }, {
          "name": "code",
          "type": "name"
        }, {
          "name": "type",
          "type": "name"
        }
      ]
    }, {
      "name": "unregprod",
      "base": "",
      "fields": [{
          "name": "producer",
          "type": "name"
        }
      ]
    }, {
      "name": "unstaketorex",
      "base": "",
      "fields": [{
          "name": "owner",
          "type": "name"
        }, {
          "name": "receiver",
          "type": "name"
        }, {
          "name": "from_net",
          "type": "asset"
        }, {
          "name": "from_cpu",
          "type": "asset"
        }
      ]
    }, {
      "name": "updateauth",
      "base": "",
      "fields": [{
          "name": "account",
          "type": "name"
        }, {
          "name": "permission",
          "type": "name"
        }, {
          "name": "parent",
          "type": "name"
        }, {
          "name": "auth",
          "type": "authority"
        }
      ]
    }, {
      "name": "updaterex",
      "base": "",
      "fields": [{
          "name": "owner",
          "type": "name"
        }
      ]
    }, {
      "name": "updtrevision",
      "base": "",
      "fields": [{
          "name": "revision",
          "type": "uint8"
        }
      ]
    }, {
      "name": "user_resources",
      "base": "",
      "fields": [{
          "name": "owner",
          "type": "name"
        }, {
          "name": "net_weight",
          "type": "asset"
        }, {
          "name": "cpu_weight",
          "type": "asset"
        }, {
          "name": "ram_bytes",
          "type": "int64"
        }
      ]
    }, {
      "name": "voteproducer",
      "base": "",
      "fields": [{
          "name": "voter",
          "type": "name"
        }, {
          "name": "proxy",
          "type": "name"
        }, {
          "name": "producers",
          "type": "name[]"
        }
      ]
    }, {
      "name": "voter_info",
      "base": "",
      "fields": [{
          "name": "owner",
          "type": "name"
        }, {
          "name": "proxy",
          "type": "name"
        }, {
          "name": "producers",
          "type": "name[]"
        }, {
          "name": "staked",
          "type": "int64"
        }, {
          "name": "last_vote_weight",
          "type": "float64"
        }, {
          "name": "proxied_vote_weight",
          "type": "float64"
        }, {
          "name": "is_proxy",
          "type": "bool"
        }, {
          "name": "flags1",
          "type": "uint32"
        }, {
          "name": "reserved2",
          "type": "uint32"
        }, {
          "name": "reserved3",
          "type": "asset"
        }
      ]
    }, {
      "name": "wait_weight",
      "base": "",
      "fields": [{
          "name": "wait_sec",
          "type": "uint32"
        }, {
          "name": "weight",
          "type": "uint16"
        }
      ]
    }, {
      "name": "withdraw",
      "base": "",
      "fields": [{
          "name": "owner",
          "type": "name"
        }, {
          "name": "amount",
          "type": "asset"
        }
      ]
    }
  ],
  "actions": [{
      "name": "activate",
      "type": "activate",
      "ricardian_contract": ""
    }, {
      "name": "bidname",
      "type": "bidname",
      "ricardian_contract": ""
    }, {
      "name": "bidrefund",
      "type": "bidrefund",
      "ricardian_contract": ""
    }, {
      "name": "buyram",
      "type": "buyram",
      "ricardian_contract": ""
    }, {
      "name": "buyrambytes",
      "type": "buyrambytes",
      "ricardian_contract": ""
    }, {
      "name": "buyrex",
      "type": "buyrex",
      "ricardian_contract": ""
    }, {
      "name": "canceldelay",
      "type": "canceldelay",
      "ricardian_contract": ""
    }, {
      "name": "cfgpowerup",
      "type": "cfgpowerup",
      "ricardian_contract": ""
    }, {
      "name": "claimrewards",
      "type": "claimrewards",
      "ricardian_contract": ""
    }, {
      "name": "closerex",
      "type": "closerex",
      "ricardian_contract": ""
    }, {
      "name": "cnclrexorder",
      "type": "cnclrexorder",
      "ricardian_contract": ""
    }, {
      "name": "consolidate",
      "type": "consolidate",
      "ricardian_contract": ""
    }, {
      "name": "defcpuloan",
      "type": "defcpuloan",
      "ricardian_contract": ""
    }, {
      "name": "defnetloan",
      "type": "defnetloan",
      "ricardian_contract": ""
    }, {
      "name": "delegatebw",
      "type": "delegatebw",
      "ricardian_contract": ""
    }, {
      "name": "deleteauth",
      "type": "deleteauth",
      "ricardian_contract": ""
    }, {
      "name": "deposit",
      "type": "deposit",
      "ricardian_contract": ""
    }, {
      "name": "fundcpuloan",
      "type": "fundcpuloan",
      "ricardian_contract": ""
    }, {
      "name": "fundnetloan",
      "type": "fundnetloan",
      "ricardian_contract": ""
    }, {
      "name": "init",
      "type": "init",
      "ricardian_contract": ""
    }, {
      "name": "linkauth",
      "type": "linkauth",
      "ricardian_contract": ""
    }, {
      "name": "mvfrsavings",
      "type": "mvfrsavings",
      "ricardian_contract": ""
    }, {
      "name": "mvtosavings",
      "type": "mvtosavings",
      "ricardian_contract": ""
    }, {
      "name": "newaccount",
      "type": "newaccount",
      "ricardian_contract": ""
    }, {
      "name": "onblock",
      "type": "onblock",
      "ricardian_contract": ""
    }, {
      "name": "onerror",
      "type": "onerror",
      "ricardian_contract": ""
    }, {
      "name": "powerup",
      "type": "powerup",
      "ricardian_contract": ""
    }, {
      "name": "powerupexec",
      "type": "powerupexec",
      "ricardian_contract": ""
    }, {
      "name": "refund",
      "type": "refund",
      "ricardian_contract": ""
    }, {
      "name": "regproducer",
      "type": "regproducer",
      "ricardian_contract": ""
    }, {
      "name": "regproducer2",
      "type": "regproducer2",
      "ricardian_contract": ""
    }, {
      "name": "regproxy",
      "type": "regproxy",
      "ricardian_contract": ""
    }, {
      "name": "rentcpu",
      "type": "rentcpu",
      "ricardian_contract": ""
    }, {
      "name": "rentnet",
      "type": "rentnet",
      "ricardian_contract": ""
    }, {
      "name": "rexexec",
      "type": "rexexec",
      "ricardian_contract": ""
    }, {
      "name": "rmvproducer",
      "type": "rmvproducer",
      "ricardian_contract": ""
    }, {
      "name": "sellram",
      "type": "sellram",
      "ricardian_contract": ""
    }, {
      "name": "sellrex",
      "type": "sellrex",
      "ricardian_contract": ""
    }, {
      "name": "setabi",
      "type": "setabi",
      "ricardian_contract": ""
    }, {
      "name": "setacctcpu",
      "type": "setacctcpu",
      "ricardian_contract": ""
    }, {
      "name": "setacctnet",
      "type": "setacctnet",
      "ricardian_contract": ""
    }, {
      "name": "setacctram",
      "type": "setacctram",
      "ricardian_contract": ""
    }, {
      "name": "setalimits",
      "type": "setalimits",
      "ricardian_contract": ""
    }, {
      "name": "setcode",
      "type": "setcode",
      "ricardian_contract": ""
    }, {
      "name": "setinflation",
      "type": "setinflation",
      "ricardian_contract": ""
    }, {
      "name": "setparams",
      "type": "setparams",
      "ricardian_contract": ""
    }, {
      "name": "setpriv",
      "type": "setpriv",
      "ricardian_contract": ""
    }, {
      "name": "setram",
      "type": "setram",
      "ricardian_contract": ""
    }, {
      "name": "setramrate",
      "type": "setramrate",
      "ricardian_contract": ""
    }, {
      "name": "setrex",
      "type": "setrex",
      "ricardian_contract": ""
    }, {
      "name": "undelegatebw",
      "type": "undelegatebw",
      "ricardian_contract": ""
    }, {
      "name": "unlinkauth",
      "type": "unlinkauth",
      "ricardian_contract": ""
    }, {
      "name": "unregprod",
      "type": "unregprod",
      "ricardian_contract": ""
    }, {
      "name": "unstaketorex",
      "type": "unstaketorex",
      "ricardian_contract": ""
    }, {
      "name": "updateauth",
      "type": "updateauth",
      "ricardian_contract": ""
    }, {
      "name": "updaterex",
      "type": "updaterex",
      "ricardian_contract": ""
    }, {
      "name": "updtrevision",
      "type": "updtrevision",
      "ricardian_contract": ""
    }, {
      "name": "voteproducer",
      "type": "voteproducer",
      "ricardian_contract": ""
    }, {
      "name": "withdraw",
      "type": "withdraw",
      "ricardian_contract": ""
    }
  ],
  "tables": [{
      "name": "abihash",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "abi_hash"
    }, {
      "name": "bidrefunds",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "bid_refund"
    }, {
      "name": "cpuloan",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "rex_loan"
    }, {
      "name": "delband",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "delegated_bandwidth"
    }, {
      "name": "global",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "eosio_global_state"
    }, {
      "name": "global2",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "eosio_global_state2"
    }, {
      "name": "global3",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "eosio_global_state3"
    }, {
      "name": "global4",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "eosio_global_state4"
    }, {
      "name": "namebids",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "name_bid"
    }, {
      "name": "netloan",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "rex_loan"
    }, {
      "name": "powup.order",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "powerup_order"
    }, {
      "name": "powup.state",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "powerup_state"
    }, {
      "name": "producers",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "producer_info"
    }, {
      "name": "producers2",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "producer_info2"
    }, {
      "name": "rammarket",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "exchange_state"
    }, {
      "name": "refunds",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "refund_request"
    }, {
      "name": "retbuckets",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "rex_return_buckets"
    }, {
      "name": "rexbal",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "rex_balance"
    }, {
      "name": "rexfund",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "rex_fund"
    }, {
      "name": "rexpool",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "rex_pool"
    }, {
      "name": "rexqueue",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "rex_order"
    }, {
      "name": "rexretpool",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "rex_return_pool"
    }, {
      "name": "userres",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "user_resources"
    }, {
      "name": "voters",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "voter_info"
    }
  ],
  "ricardian_clauses": [{
      "id": "UserAgreement",
      "body": "# EOS User Agreement\n\n## Definitions\n\n All capitalized, italicized, or inline code terms in *The EOS User Agreement* will be given the same effect and meaning as in *Definitions*.\n\n* EOS User Agreement: This document (*EUA*)\n\n* Chain ID: `chain_id` - aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906\n\n* User: Any person or organization of persons who maintain(s) direct or indirect ownership of an EOS account, or EOS-based property connected to an EOS account.\n\n* Ownership: Direct or indirect access to an EOS account through one or more valid permissions checks. Ownership may be partially shared between Users through the use of multi-signature permissions.\n\n* Block Producer: Users who have called `regproducer` and receive rewards from eosio.vpay.\n\n* `eosio.prods`: An EOS account with a dynamic permissions structure that can assume the privileges of the `eosio` account when 15/21 Block Producers agree to do so.\n\n* Network Funds: Tokens contained within the following accounts: `eosio.names`, `eosio.ramfee`, `eosio.saving`.\n\n* Governing Documents: *regproducer* is considered a governing document.\n\n* On-Chain: Any transaction, smart contract, or Ricardian contract which is located within a block that is irreversible and appended to the EOS blockchain `chain_id`.\n\n* EOS-based Property: Anything that requires a valid permission in order to directly manipulate, alter, transfer, influence, or otherwise effect on the EOS Blockchain\n\n* Call: To submit an action to the EOS Blockchain `chain_id`.\n\n* Authorizations & Permissions: Permissions are arbitrary names used to define the requirements for a transaction sent on behalf of that permission. Permissions can be assigned for authority over specific contract actions.\n\n* Ricardian Contract: A contract that places the defining elements of a legal agreement in a format that can be expressed and executed in software.\n\n## Article I -  User Acknowledgement of Risks\nIf User loses access to their EOS account on `chain_id` and has not taken appropriate measures to secure access to their EOS account by other means, the User acknowledges and agrees that that EOS account will become inaccessible. Users acknowledge that the User has an adequate understanding of the risks, usage and intricacies of cryptographic tokens and blockchain-based software. The User acknowledges and agrees that the User is using the EOS blockchain at their sole risk.\n\n## Article II - Special User Types\nUsers who call `regproducer` agree to, and are bound by, the *regproducer* Ricardian Contract.\n\n## Article III - Consent of the EUA\nThe nature of the *EOS User Agreement* is such that it serves as a description of the current EOS Mainnet governance functions that are in place. These functions, enforced by code, do not require the consent of Users as these functions are inherent and systemic to the EOS Mainnet itself.\n\n## Article IV - Governing Documents\nAny modifications to the *EUA* and *governing documents* may be made by `eosio.prods`. It is admonished that a statement be crafted and issued through `eosio.prods` via eosio.forum referendum contract describing such a modification in advance.\n\n## Article V - Native Unit of Value\nThe native unit of value on EOS chain_id shall be the EOS token as defined and created by the `eosio.token` smart contract.\n\n## Article VI - Maintaining the EOS blockchain\n`eosio.prods` will maintain the active blockchain codebase which includes, but is not limited to, the implementation of all modifications of all features, optimizations, and upgrades: present and future.\n\n## Article VII - Network Funds\nIt is admonished that any altering of the state of any tokens contained within network fund accounts, or altering any pre-existing code that directly or indirectly governs the allocation, fulfillment, or distribution of any *network funds* be preceded by a statement crafted and issued by `eosio.prods` to the *eosio.forum* referendum system contract describing the effect in advance.\n\n## Article VIII - Freedom of Account Creation\nAny current or future User is able to create an EOS Account without the permission by any other User. `eosio.prods` may never affect an EOS User Account(s) without valid permission(s) which have been shared with `eosio.prods` by an EOS account. `eosio.prods` may charge a fee for any actions that are requested by other Users pertaining to an EOS account where permissions are shared.\n\n## Article IX - No Fiduciary\nNo User shall have a fiduciary purpose to support the value of the EOS token. No User can authorize anyone to hold assets, borrow, speak, contract on behalf of other EOS Users or the EOS blockchain `chain_id` collectively. This EOS blockchain shall have no owners, managers, or fiduciaries.\n\n## Article X - User Security\nAll items pertaining to personal account security, including but not limited to the safekeeping of private keys, is solely the responsibility of the User to secure.\n\n## Article XI - `eosio.prods` Limited Liability\nThe User acknowledges and agrees that, to the fullest extent permitted by any applicable law, this disclaimer of liability applies to any and all damages or injury whatsoever caused by or related to risks of, use of, or inability to use, the EOS token or the EOS blockchain `chain_id` under any cause of action whatsoever of any kind in any jurisdiction, including, without limitation, actions for breach of warranty, breach of contract or tort (including negligence) and that `eosio.prods`, nor the individual permissions that operate it, shall not be liable for any indirect, incidental, special, exemplary or consequential damages, including for loss of profits, goodwill or data.\n\n# EOS 사용자 동의서\n\n## 정의\n\nEOS 사용자 동의서의 모든 대문자, 기울임 꼴, 또는 인라인 코드 용어는 정의에서와 동일한 효과와 의미가 부여됩니다.\n\n-   EOS 사용자 동의서: 본 문서 (EUA)\n-   체인 ID: chain_id --- aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906\n-   사용자: EOS 계정을 직접 또는 간접적으로 소유하거나 EOS 계정에 연결된 EOS 기반 속성을 유지하거나 관리하는 사람, 조직, 또는 조직의 모든 사람.\n-   소유권: 하나 이상의 유효한 사용권한 확인을 통해 EOS 계정에 직접 또는 간접적으로 접근합니다. 소유권은 다중 서명권한을 사용하여 사용자간에 부분적으로 공유 될 수 있습니다.\n-   블록 프로듀서: regproducer를 실행하고 eosio.vpay로부터 보상을 받는 사용자.\n-   eosio.prods: 15/21 블록 프로듀서들이 동의 할 때 eosio 계정의 권한을 가질 수 있는 동적 권한 구조를 가진 EOS 계정.\n-   네트워크 자금: 다음 계정에 포함 된 토큰: eosio.names, eosio.ramfee, eosio.saving.\n-   관리 문서: regproducer는 관리 문서로 간주됩니다.\n-   온체인: EOS 블록체인 chain_id에 비가역적이며 추가 할 수 있는 블록 내에 위치한 모든 거래, 스마트 계약 또는 리카르디안 계약.\n-   EOS 기반 속성: EOS 블록체인을 직접 조작, 변경, 전송, 영향 또는 달리 적용하기 위해 유효한 사용 권한이 필요한 모든 것\n-   콜: EOS 블록체인 chain_id에 작업을 신청하는 것.\n-   허가 및 권한: '허가'는 해당 권한을 대신하여 전송되는 트랜잭션의 요구사항을 정의하는 데 사용됩니다. '권한'은 특정 계약 조치에 대한 권한을 부여합니다.\n-   리카르디안 계약: 합법적 계약의 정의 요소를 소프트웨어로 표현하고 실행할 수 있는 형식으로 배치하는 계약.\n\n## 제 1조 --- 위험에 대한 사용자들의 인지\n\n사용자가 chain_id에서 EOS 계정에 대한 접근 권한을 잃고, 다른 방법으로 EOS 계정에 대한 접근을 보호하기 위해 적절한 조치를 취하지 않는 경우에는 EOS 계정에 접근할 수 없게 된다는 것을 인정하고 동의합니다. 사용자는 암호화 토큰과 블록체인 기반 소프트웨어의 위험, 사용법, 그리고 복잡성에 대해 충분히 이해하고 있음을 인정합니다. 사용자는 EOS 블록체인의 사용에 대한 전적인 책임을 진다는 것에 인정하고 동의합니다.\n\n## 제 2조 --- 특별한 사용자 유형\n\nregproducer를 실행하는 사용자는 regproducer 리카르디안 계약에 동의하고, 이에 구속됩니다.\n\n## 제 3조 --- EUA의 동의\n\nEOS 사용자 동의서는 현재 시행중인 EOS 메인넷 거버넌스에 대한 설명으로 사용됩니다. 코드에 의해 시행되는 이러한 기능은 EOS 메인넷 자체의 체계적이고 고유한 기능이므로 사용자의 동의를 필요로 하지 않습니다.\n\n## 제 4조 --- 관리 문서\n\nEUA와 관리 문서는 eosio.prods를 통해 수정이 가능합니다. 특정 변경사항을 사전에 설명하는 eosio.forum 투표 계약을 통해 eosio.prods가 성명서를 작성하고 발급할 것을 권고합니다.\n\n## 제 5조 --- 가치의 기본 단위\n\nEOS chain_id의 기본 단위는 eosio.token 스마트 계약에 의해 정의되고 작성된 EOS 토큰입니다.\n\n## 제 6조 --- EOS 블록체인 유지\n\neosio.prods는 모든 기능, 최적화, 그리고 업그레이드의 현재와 미래의 모든 수정사항을 구현하는 것을 포함하되, 이에 국한되지 않는 활성화된 블록체인 코드베이스를 유지합니다\n\n## 제 7조 --- 네트워크 자금\n\n네트워크 자금 계정에 포함된 토큰의 상태를 변경하거나, 네트워크 자금의 배분, 이행, 또는 배포를 직/간접적으로 관리하는 기존 코드를 변경하는 경우에는 eosio.prods를 eosio.forum 총 투표 시스템 계약에 추가하여 사전에 충분한 설명이 이루어져야 합니다.\n\n## 제 8조 --- 계정 생성의 자유\n\n현재, 또는 미래의 사용자는 다른 사용자의 허가 없이 EOS 계정을 만들 수 있습니다. eosio.prods는 EOS 계정에 의해 공유된 유효한 허가 없이는 EOS 사용자 계정에 영향을 줄 수 없습니다. eosio.prods는 권한이 공유되는 EOS 계정과 관련하여 다른 사용자가 요청한 모든 작업에 대해 요금을 부과할 수 있습니다.\n\n## 제 9조 --- 신탁 불가\n\n사용자는 EOS 토큰의 가치를 뒷받침할 수 있는 신탁 목적을 가져서는 안됩니다. 사용자는 EOS 사용자 또는 EOS 블록체인 chain_id를 대표하여 누구에게도 자산을 보유하거나, 대여하거나, 자산에 대해 얘기하거나, 계약을 맺을 권한을 부여할 수 없습니다. EOS 블록체인에는 소유자, 관리자, 그리고 수탁자가 없어야 합니다.\n\n## 제 10조 --- 사용자 보안\n\n비공개 키의 보관을 포함하되, 이에 국한되지 않는 개인 계좌 보안과 관련된 모든 항목들 또한 전적으로 사용자가 안전하게 보관해야 합니다.\n\n## 제 11조 --- eosio.prods 유한책임\n\n사용자는 법률이 허용하는 한도 내에서 EOS 토큰의 위험, 사용, 또는 사용 불가로 인해 발생하는 모든 손해에 대해 책임의 면책 조항이 적용된다는 것을 인정하고, 동의합니다. 계약 위반, 불법 행위, 그리고 위반 행위 (관리 태만 포함)와 eosio.prods 또는 이를 운영하는 개별 사용 권한을 포함하되, 이에 국한하지 않고 모든 관할 지역에서의 모든 종류의 사유로 인한 EOS 블록체인 chain_id 이익, 영업권, 또는 데이터의 손실을 포함하여 간접적, 우발적, 특수한, 대표적, 그리고 파생적인 손해에 대한 책임을 지지 않습니다.\n\n# EOS用户协议\n\n## **定义**\n\nEOS用户协议中的所有大写，斜体或内联代码术语将具有与以下定义相同的效果和含义。\n\n- EOS用户协议：即本文档（EUA）\n\n- 链上ID: chain_id - aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906\n\n- 用户：任意满足下列要求的个人或组织：直接或者间接拥有EOS账户或与EOS账户关联的基于EOS发行的财产。\n\n- 所有权：直接或者间接通过一个或多个有效的权限检查访问一个EOS账户。所有权可以通过多签权限许可在用户间共享。\n\n- 执行了regproduce，并且从eosio.vpay领取收入的用户。\n\n- eosio.prods:具有动态权限结构的EOS帐户，当15/21 Block Producers同意时，该帐户可以承担eosio帐户的权限。\n\n- 网络资产：包含在以下账户中的代币：eosio.names、eosio.ramfee、  eosio.saving。\n\n- 治理文档：regproducer是治理文档。\n\n- 任何交易、智能合约或者李嘉图合约，它们已经位于一个区块中，并且这个区块是不可逆转的、已附加到名为chain_id的EOS区块链中。\n\n- 基于EOS资产：任何需要有效许可来操作、改变、转移、影响或者进行其他操作的东西。\n\n- 执行：在名为chain_id的EOS区块链中提交一个行动。\n\n- 授权和权限：权限（Permissions）是用来定义代表该权限发送的交易的要求的任意名字。可以给特定的合约操作的授权（Authorizations）分配权限（Permissions）。\n\n- 李嘉图合约：将法律协议中的定义要素以能在软件中表达和执行的格式表达的合约。\n\n## **条款一****用****户风险确认**\n\n如果用户丢失账户访问权限或者没有采取合适的方式保护账户访问权限，用户应知悉并同意，EOS账户将无法访问。用户应确认用户对加密代币和区块链软件的风险、用法和复杂性有充分了解。用户承认并同意用户自行承担使用EOS区块链的风险。\n\n## **条款二****特殊用****户类型**\n\n执行regproduce，同意并且受regproducer李嘉图合约约束的用户。\n\n## **条款三****同意****EOS****用****户协议**\n\nEOS用户协议的实质是对当前EOS主网治理功能的描述。由代码强制执行的功能不需要用户的同意，因为这些功能是EOS主网系统自带的。\n\n## **条款四** - **治理文档**\n\neosio.prods可以对EOS用户协议和治理文档进行任何修改。严正提醒，提前用eosio.forum公投合约，通过eosio.prods编写、发布一个声明来描述那个修改。\n\n## **条款五****原生价****值单位**\n\nEOS公链上的原生价值单位应为eosio.token智能合约定义和创建的EOS通证。\n\n## **条款六****维护****EOS****区****块链**\n\n无论现在或将来将来，eosio.prods将维护活跃的区块链代码库，包括但不限于所有功能、优化、升级的所有修改、实现。\n\n## 条款七 - ****定****义****EOS****网络资产\n\n更改网络资产账户中的任何代币的状态，更改任何现存的直接或间接管理任何网络资产的分配、实现或分发的代码，需要事先用eosio.prods在eosio.forum公投合约上编写和发布效果描述的声明。\n\n## **条款八-创建账户自由**\n\n任何现在或将来的用户都可以在未经任何其他用户许可的情况下创建EOS帐户。  如何没有收到EOS帐户的有效许可（permission），eosio.prods永远不会影响EOS用户帐户。  对于共享权限的EOS帐户的其他用户请求的任何操作，eosio.prods可能会收取费用。\n\n## **条款九没有受托人**\n\n没有用户承担信托责任来维持EOS代币的价值。没有用户可以代表EOS用户或者代表名为chain_ID的EOS区块链授权任何人共同持有资产、借款、发言或定合同。此区块链不存在拥有者、管理者或者受托人。\n\n## **条款十个人安全**\n\n所有有关个人账户安全的事项，包括但不限于私钥的安全保存，都由用户自己负责。\n\n## **条款十一 eosio.prods的有限责任**\n\n用户应知悉和同意，在任何适用法律允许的最大范围内，本免责声明适用于与EOS代币风险，使用或无法使用EOS代币有关或导致的任何或所有损害或伤害，也适用于任何司法管辖区内的任何任何行为下的EOS区块链chain_id，包括但不限于违反担保、违反合同或侵权行为（包括疏忽）。eosio.prods以及操作它的个人权限对于任何间接的，偶然的，特殊的，示例性的或后果性的损害，包括利润损失，商誉或数据，不承担任何责任。"
    }, {
      "id": "BlockProducerAgreement",
      "body": "### 1. The intent of regproducer\n\nThe intent of the `regproducer` action is to register a block producer candidacy. This contract is considered a governing document as defined by the EOS User Agreement (EUA).\n\nregproducer의 목적\n\n`regproducer` 작업의 목적은 블록생산자 입후보 등록을 하는 것입니다. 이 계약은 EOS 사용자 계약서 (EUA)에 정의된 바와 같이 관리 문서로 간주됩니다.\n\nregproducer 的目的\n\n`regproducer`操作的目的是注册成为出块节点候选者。根据 EOS 用户协议(EUA)的定义，本合约属于治理文本(governing document)\n\n### 2. Nomination\n\nI, {{ producer }}, hereby nominate myself for consideration as a block producer candidate. This nomination includes agreement to the terms of this contract by my block producer candidate entity, including all of its shareholders, owners, employees, staff, members, and any individual working in official, direct, or affiliated capacity for my Block Producer entity.\n\n지명\n\n나, {{ producer }}는 블록프로듀서 후보로 고려되도록 자신을 지명합니다. 이 지명에는 블록프로듀서회사의 모든 주주, 소유자, 직원, 멤버, 회원 및 공식인원, 직접 또는 계열사에서 일하는 모든 개인을 포함한 블록프로듀서 회사가 계약 조건에 대해 동의함을 인정합니다.\n\n提名\n\n本人，{{ producer }}，特此提名本人为出块节点候选人。本提名包括了本出块节点候选人实体对本合约中所有条款的明确同意，包含其所有者、雇员、员工、成员，以及任何以正式方式、直接或附属方式为本出块节点实体工作的个人。\n\n### 3. Resignation and Removal for Inability to Perform Obligations.\n\nIf I, {{ producer }}, am unable to perform any of the obligations stipulated in this contract, I will resign my position by calling the `unregprod` action.\n\nIf I, {{ producer }}, fail to resign when unable to perform said obligations, I understand that procedures enumerated in this contract shall be enacted.\n\n의무의 불이행에 대한 사임 및 철회\n\n{{ producer }}가 본 계약서에 명시된 의무를 수행 할 수 없는 경우, 생산자 키를 null 로 함으로써 본인의 지위를 사임합니다.\n\n만약 내가 {{producer}}의 의무를 이행 할 수 없을 때 사임하지 않는다면, 나는 본 계약에 열거된 절차가 집행됨을 동의합니다.\n\n因不能履行义务而退出或被取消出块资格\n\n如果我，{{ producer }}，不能履行本合约中所规定的所有义务，我将使用 `unregprod` 操作来自我退出（resign）。\n\n如果我 {{ producer }}, 在无法履行上述义务时未能退出(resign)，我知晓本合约将会按照所有列举的程序对我实行制裁或处罚程序。\n\n### 4. EOS Accounts\n\nBlock Producers may never affect an account on the EOS blockchain, except for the reasons specifically cited in this contract that pertain to Block Producer accounts. User accounts can only be affected on the basis of Article VIII in the EOS User Agreement.\n\nEOS 계정\n\n블록프로듀서는 본 계약에서 해당하는 블록프로듀서의 계정 차단에 관련하여 특별히 언급한 이유를 제외하고는 EOS 블록체인의 계정에 결코 영향을 미치지 않습니다. 사용자 계정은 EOS 사용자 계약서의 8조에 근거할 때만 영향을 받을 수 있습니다.\n\nEOS 账号\n\n出块节点永远不会对 EOS 区块链上的帐户造成影响，除非是本合约中特别提到与出块节点帐户有关的原因。只有基于 EOS用户协议中的第八条的情形下，用户的账号才会受到影响.\n\n### 5. Producer Key\n\nI, {{ producer }}, will sign blocks with {{ producer_key }}\n\nIf I, {{ producer }} suspect my key has been compromised I will alert the other Block Producers immediately.\n\nI, {{ producer }}, acknowledge that any and all actions executed with my {{ producer_key }} is my responsibility, regardless of the account being compromised.\n\n프로듀서 키\n\n나, {{ producer }}는 {{ producer _ key }} 로 블록에 서명 할 것입니다.\n만약 내, {{producer}} 가 본인의 키가 손상되었다고 의심되면 즉시 다른 블록프로듀서에게 알려줄 것입니다.\n나, {{producer}}는 EOS 블록체인에서 본인의 블록프로듀서 계정이 실행하는 모든 작업에 대해, 계정 이상 유무와 관련 없이, 책임이 있음을 인정합니다.\n\n出块节点公钥\n\n 我, {{ producer }}, 将使用 {{ producer_key }} 对区块签名。\n如果我, {{ producer }}, 怀疑我的密钥已被泄露，我将立即通知其他节点。\n我，{{ producer }}，承认我的出块节点帐户在EOS区块链上所执行的任何操作都是我的责任，无论该帐户是否被盗。\n\n### 6. API Endpoints\n\nIf I, {{ producer }}, qualify for, and choose to claim rewards due to votes received, and/or blocks produced, I, {{ producer }}, will provide functioning and queryable public P2P and API endpoints to maintain synchronization with the blockchain and submit transactions to be included. API endpoints must be updated to a recent functional version that does not have known security vulnerabilities.\n\nI, {{ producer }}, hereby acknowledge that if I am unable to do so within 30 minutes of being alerted by another block producer candidate, I can be removed by use of the `rmvproducer` action.\n\nAPI 엔드포인트\n\n만약 내, {{ producer }} 가 투표를 받아 블록 보상을 청구할 수 있는 자격을 얻으면, 나 {{ producer }}는 작동 및 쿼리 가능한 공개 P2P 및 API 엔드포인트를 블록체인과의 동기화 및 트랜잭션을 제출할 수 있게 유지관리합니다. API 엔드포인트는 알려진 보안 취약성이 없는 최신버전으로 업데이트해야 합니다.\n\n나, {{ producer }} 는 다른 block producer candidate 가 경고 ​​한 후, 30분 이내에 바로잡을 수 없다면 `rmvproducer` 조치를 통해 자격이 제거 될 수 있음을 인정합니다.\n\nAPI 端点\n\n如果我，{{ producer }} 由于得到投票和/或出块的原因，符合领取奖励的条件并选择接受奖励，那么我， {{ producer }}，将提供功能正常的公共 P2P 和 API 端点来维护与区块链的同步，并提交要打包入块的事务。API 端点必须更新到最新的可用版本，并且该版本没有已知的安全漏洞\n\n我，{{producer}}，在此确认，如果我在收到另一个 block producer candidate的警告后30分钟内仍不能符合上述要求，可以使用`rmvproducer`操作移除我的账户。\n\n### 7. Execution time\n\nI, {{ producer }}, will deploy and run network infrastructure capable of maintaining 2ms or less CPU execution times.\n\nI, {{ producer }}, hereby acknowledge that if I am unable to do so within 30 minutes of being alerted by another block producer candidate, I can be removed by use of the `rmvproducer` action.\n\n실행 시간\n\n나, {{ producer }}는 2ms 또는 그 이하의 CPU 실행 시간을 유지할 수 있는 네트워크 인프라를 배포하고 실행합니다.\n\n 나, {{ producer }} 는 다른 block producer candidate가 경고 ​​한 후, 30분 이내에 바로잡을 수 없다면 `rmvproducer` 조치를 통해 자격이 제거 될 수 있음을 인정합니다.\n\n执行时间\n\n我， {{ producer }}，将部署和运行网络基础设施，能够将 CPU 执行时间维持在 2ms 或更少的水平。\n\n我，{{ producer }}，在此确认，如果我在收到另一个block producer candidate的警告后30分钟内不能符合上述条件，可以使用 `rmvproducer` 操作将我移除。\n\n### 8. Ordering\n\nI {{ producer }} agree to process transactions on a first-in-first-out (FIFO) basis, and not to manipulate the contents of blocks in order to derive profit from the order in which transactions are included: the hash of the block that is produced.\n\n생산\n나, {{ producer }}는 선입 선출법 (FIFO) 방식으로 거래를 처리하고 거래가 블록의 해시에 포함되는 순서에서 이익을 얻으려는 목적으로 생산하는 블록의 내용을 조작하지 않기로 동의합니다.\n\n顺序\n\n我， {{ producer }} ，同意根据先进先出(FIFO)的方式处理事务，并且绝不会为了牟利而利用区块内容、操纵区块中交易处理的顺序。\n\n### 9. Random Rotation of Standbys\n\nI, {{ producer }}, agree that if I am in a paid standby position, I can be randomly called into a producing position. Upon failure to produce blocks, code may self-execute penalties regarding future vpay rewards.\n\n유급 대기 블록프로듀서의 무작위 로테이션\n\n나, {{ producer }}는 본인이 유급 대기직에 있을 때, 무작위로 생산직으로 부름 받을 수 있다는 것에 동의합니다. 이때 블록을 생성하지 못하면 코드는 향후 vpay 보상에 대한 처벌을 집행할 수 있습니다.\n\n备选节点随机轮换\n\n我，{{ producer }}，同意若本节点处于有偿备选状态，可被随机调入出块状态。如果我无法出块，合约代码可能会自动执行就未来的 vpay 报酬进行处罚。\n\n### 10. Missing Two or More Rounds of Blocks\n\nI, {{ producer }}, acknowledge that if after missing 2 or more rounds of blocks in succession I am unable to be contacted within 20 minutes, I, {{ producer }}, acknowledge that I may be removed from a producing position by use of the `rmvproducer` action.\n\nI, {{ producer }}, acknowledge that after missing two or more rounds of blocks in succession, standard practice stipulates removing my producer by using the `unregprod` action until the given issue is resolved.\n\n두 라운드 이상의 블록 누락\n\n나, {{ producer }}는 두 라운드 이상 연속하여 블록을 누락 한 후, 20분 이내에 연락 할 수 없다면 {{ producer }} 가 `rmvproducer` 액션의 사용되어 생산 위치에서 제거 될 수 있음을 인정합니다.\n\n{{ producer }}는 두 라운드 이상으로 블록을 연속적으로 누락한다면, 주어진 문제가 해결 될 때까지 `unregprod` 작업을 사용하여 본인이 생산 위치에서 제거됨이 표준 관행으로 규정되어 있음을 인정합니다.\n\n两轮或更多轮丢块的情形\n\n我，{{ producer }}, 确认如果连续两轮或更多轮丢块且无法在20分钟内联系到我，我，{{ producer }}, 同意可能会用 `rmvproducer` 操作将我移除。\n我，{{ producer }}, 如果连续两轮或更多轮丢块，根据标准实践会发起 `unregprod` 操作将我移除出块资格，直到问题解决。\n\n### 11. Urgent Security Patches\n\nI, {{ producer }}, acknowledge that if I am not able to be contacted in any form after an urgent security patch is announced, I may be removed by use of the `rmvproducer` action.\n\n긴급 보안 패치\n긴급 보안 패치가 발표 된 후, 어떤 형태로든 연락 할 수 없는 경우 `rmvproducer` 작업을 사용하여 제거 될 수 있음을 나, {{ producer }}는 인정합니다.\n\n紧急安全补丁\n\n我，{{ producer }}，确认如果在紧急安全补丁发布后用任何方式都无法联系到我，可能会用 `rmvproducer` 指令将我移除。\n\n### 12. Disclosure of Entity and Server Information\n\nI, {{ producer }}, attest that I have disclosed the approximate geolocation for my main production node as being {{ location }}.\n\n법인 및 서버 정보의 공개\n\n나, {{ producer }} 는 주 생산 노드에 대한 위치 정보를 공개했음을 증명합니다.\n\n实体和服务器的信息披露\n\n我，{{ producer }}，确认我已经披露了主出块节点服务器地理位置的准确信息。其地址为 {{ location }}。\n\n### 13. Establishes the penalty and procedure for unwillingness to comply with penalties or procedures\n\nI, {{ producer }}, acknowledge that failing to comply with penalties or procedures enacted against me will result in Block Producers executing the `rmvproducer` contract to remove me.\n\nI, {{ producer }}, will not execute the `regproducer` contract until serving or fulfilling the requirements from a penalty or procedure that results in having the `rmvproducer` contract executed to remove me.\n\nI, {{ producer }}, acknowledge that if I continue to call the `regproducer` action without serving or fulfilling the requirements from breach of `regproducer`, my account keys associated with the registered Block Producer in question may be nulled by Block Producers by using `eosio.wrap`.\n\n페널티를 준수하지 않을 경우 벌칙\n\n나, {{ producer }} 는 나에게 제재된 처벌을 준수하지 않으면 블록프로듀서들이 `rmvproducer` 계약을 집행하게 될 것이라고 인정합니다. 나, {{ producer }} 는 `rmvproducer` 계약이 집행된다면 요구 사항을 충족될 때까지 `regproducer` 계약을 이행하지 않을 것입니다.\n`regproducer` 계약 위반으로 인한 요구 사항을 충족시키지 않고 `regproducer` 계약을 계속 호출하면 해당 블록프로듀서와 관련된 계정 키가 `eosio.wrap` 을 사용하여 블록프로듀서들에 의해 무효화 될 수 있음을 인정합니다.\n\n对不愿遵守处罚的行为予以处罚\n\n我，{{ producer }}，承认若不遵守对本人制裁的处罚，BP 可以实施 `rmvproducer` 合约，我接受投票的资格将被取消。若有针对我实施 `rmvproducer` 合约的情况发生，我, {{ producer }} 在遵守/履行所收到的处罚之前，不会再次执行 `regproducer` 合约。\n\n我，{{ producer }}，在履行惩罚程序的要求之前，不会执行 `regproducer` 合同。我知晓如不履行此程序， `rmvproducer` 合同将会再次将我移除。\n\n我,{{ producer }}, 承认如果没有遵守或履行因违反 `regproducer` 而受到的惩罚要求却继续调用`regproducer`操作，BP 可以调用 `eosio.wrap` 合约将我用来注册出块节点的账号密钥设置为无效值。"
    }
  ],
  "error_messages": [],
  "abi_extensions": [],
  "variants": []
}