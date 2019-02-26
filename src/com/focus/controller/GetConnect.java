package com.focus.controller;

import sun.net.www.http.HttpClient;

import java.io.IOException;

/**
 * Created by Dipak on 2/7/2019.
 */
public class GetConnect
{
    static String[] authorize() throws IOException
    {
        try
        {

            HttpClient httpclient = HttpClientBuilder.create().build();
//            String sLoginURL = "http://crm.centrahub.com:9000/crmservices/oauth/rest/authorize";
            String sLoginURL = "http://localhost:9000/crmservices/rest/oauth/authorize";
            HttpPost httpMethod = new HttpPost(sLoginURL);
            JSONObject json = new JSONObject();
            json.put("grant_type", "password");
            json.put("client_id", "o40aM6084AIYKk0kvRu6SVMEtK^F3V6S1NnMazGIC^4=!n");
            json.put("client_secret", "SXwyQwgdy4N6pJE9MGlMOUWHwD4fmcVYwYBHbEu8r^E=!n");
//            json.put("client_id", "5qKhDa8RtgnqrGy^CXWlrbzNmf1IjcgT515nDFKW90E=!n");
//            json.put("client_secret", "aYsW2d^Huc9ku1NY66Klz0WHwD4fmcVYwYBHbEu8r^E=!n");
            json.put("username", "su");
            json.put("password", "a");
//            json.put("username", "pavankumar@centrahub.com");
//            json.put("password", "a");
//            json.put("user_type", "css");
//            json.put("userInfo", "true");
//            json.put("companycode", "");
            JSONObject clResponse = new JSONObject();
            clResponse.put("login", json);
            System.out.println("login by post = " + json.toString());
//            StringEntity params = new StringEntity("{\"username\":\"su\",\"client_secret\":\"abc1234567890xyz\",\"grant_type\":\"password\",\"client_id\":\"1234567890\",\"companycode\":\"010\",\"password\"\"a\"}");
            StringEntity params = new StringEntity(json.toString());
//            Header oauthHeader = new BasicHeader("grant_type", "refresh_token");
//            httpMethod.addHeader(oauthHeader);
            httpMethod.setEntity(params);

            /*List<NameValuePair> urlParameters = new ArrayList<NameValuePair>();
            urlParameters.add(new BasicNameValuePair("grant_type", "password"));
            urlParameters.add(new BasicNameValuePair("client_id", "1234567890"));
            urlParameters.add(new BasicNameValuePair("client_secret", "abc1234567890xyz"));
            urlParameters.add(new BasicNameValuePair("username", "su"));
            urlParameters.add(new BasicNameValuePair("password", "focus"));
            urlParameters.add(new BasicNameValuePair("companycode", "170"));
            httpMethod.setEntity(new UrlEncodedFormEntity(urlParameters));*/
            HttpResponse response = httpclient.execute(httpMethod);
            String sResult = EntityUtils.toString(response.getEntity());
            System.out.println("getResult = " + sResult);
            JsonObject obj = new JsonParser().parse(sResult).getAsJsonObject();
            short iStatus=Short.parseShort(obj.get("status").getAsString());
            String sAccessToken=null,sRefreshToken=null;
            if(iStatus==0)
            {
                JsonArray obj2 = (JsonArray) obj.get("errors");
                System.out.println("error message==>" + obj2.get(0));
                JsonObject obj3 = (JsonObject) obj2.get(0);
                System.out.println("error message==>" + obj3.get("message"));
                System.out.println("error Code==>" + obj3.get("errorCode"));
            }
            else
            {
                sAccessToken= obj.get("accessToken").getAsString();
                sRefreshToken= obj.get("refreshToken").getAsString();
                System.out.println("Status==>" + obj.get("status"));
                System.out.println("Access Token==>" + sAccessToken);
            }
            return new String[]{sAccessToken,sRefreshToken};

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
