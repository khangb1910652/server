export const knex = require("knex")({
  client: "oracledb",
  connection: {
    user: "ADMIN",
    password: "Thuctap2023*",
    connectString: "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.ap-sydney-1.oraclecloud.com))(connect_data=(service_name=ga696eb0e258ca2_sq5hptlaubbadgu1_high.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))",
    wallet_location: "/Wallet_KNUM984WSLT3BMIX",
  },
});
