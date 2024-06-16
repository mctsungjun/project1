package com.myjob.member.controller;



import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.security.SecureRandom;
import java.util.HashMap;

import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.core.JsonProcessingException;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

@RestController

public class MemberController {
    
   
    
    // 메인화면 보이기
    @RequestMapping(path="/")
    public ModelAndView index(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("index");
        return mv;
    }

    //로그인
    @RequestMapping(path="/sung/login")
    public ModelAndView login(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sung/login");
        return mv;
    }
    //회원등록
    @RequestMapping(path="/sung/register")
    public ModelAndView register(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sung/register");
        return mv;
    }
    //아이디중복확인
    @RequestMapping(path="/memberId/chk")
    public int userIdchk(@RequestParam("userId") String id ){
        System.out.println("usedId:  "+id);
        if(!id.isEmpty()){
            return 0;
        }else{
            return 1;

        }

    }

    //아이디/비번 찿기form
    @RequestMapping(path="/sung/findIdPwd")
    public ModelAndView findIdPwdForm(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sung/findIdPw");
        
        return mv;
    }

//     //네이버 로그인폼
    @RequestMapping(path="/naver/callback")
    public String naver_login(HttpServletRequest request) {
        String client_id = "De0kPxQwyc06a1EHZFqe";
        String redirect_uri;
        String apiURL=null;
        try {
            redirect_uri = URLEncoder.encode("http://localhost:8989/naver/callback", "UTF-8");
           SecureRandom random = new SecureRandom();
    String state = new BigInteger(130, random).toString();
     apiURL = "https://nid.naver.com/oauth2.0/authorize?response_type=code"
         + "&client_id=" + client_id
         + "&redirect_uri=" + redirect_uri
         + "&state=" + state;
          HttpSession session = request.getSession();
            session.setAttribute("state", state);
          
        } catch (UnsupportedEncodingException e) {
            
            e.printStackTrace();
        }

        return "redirect:/naver/callback1";
}

//네이버 콜백
@RequestMapping(path="/naver/callback1")
public void naverRedirect(HttpServletRequest request) throws UnsupportedEncodingException {
	 String clientId = "De0kPxQwyc06a1EHZFqe";//애플리케이션 클라이언트 아이디값";
    String clientSecret = "_1X0GuKC9F";//애플리케이션 클라이언트 시크릿값";
    String code = request.getParameter("code");
    String state = request.getParameter("state");
    String redirectURI = URLEncoder.encode("http://localhost:8989/naver/callback", "UTF-8");
    String apiURL;
    apiURL = "https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&";
    apiURL += "client_id=" + clientId;
    apiURL += "&client_secret=" + clientSecret;
    apiURL += "&redirect_uri=" + redirectURI;
    apiURL += "&code=" + code;
    apiURL += "&state=" + state;
    String access_token = "";
    String refresh_token = "";
    System.out.println("apiURL="+apiURL);
    try {
      URL url = new URL(apiURL);
      HttpURLConnection con = (HttpURLConnection)url.openConnection();
      con.setRequestMethod("GET");
      int responseCode = con.getResponseCode();
      BufferedReader br;
      System.out.print("responseCode="+responseCode);
      if(responseCode==200) { // 정상 호출
        br = new BufferedReader(new InputStreamReader(con.getInputStream()));
      } else {  // 에러 발생
        br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
      }
      String inputLine;
      StringBuffer res = new StringBuffer();
      while ((inputLine = br.readLine()) != null) {
        res.append(inputLine);
      }
      br.close();
      if(responseCode==200) {
        System.out.println(res.toString());
      }
    } catch (Exception e) {
      System.out.println(e);
    }
    
}

@ResponseBody
@RequestMapping(path="kakao/callback")
public void kakaoLogin(@RequestParam String code){
    System.out.println(code);
}
}
