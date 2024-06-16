package com.myjob.member.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

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


}
