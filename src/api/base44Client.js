import { createClient } from "@base44/sdk";
import { appParams } from "@/lib/app-params";

const base44 = createClient({
  appId: appParams.appId,
  token: appParams.token,
  appBaseUrl: appParams.appBaseUrl,
  functionsVersion: appParams.functionsVersion,
});

export default base44;
