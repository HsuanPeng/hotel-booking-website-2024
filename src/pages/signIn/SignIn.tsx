import { Box, Checkbox } from "@mui/material";
import {
  SignInContainer,
  SignInBG,
  SignInForm,
  SignInFormContainer,
  SignInTitleContainer,
  SignInTitle,
  SignInSubtitle,
  InputBox,
  InputContainer,
  InputLabel,
  Input,
  LoginButton,
  PasswordBox,
  PasswordLeft,
  PasswordForgot,
  GoRegister,
  GoRegisterText,
  NotCustomer,
  LineBox,
} from "./SignIn.style";
import BG from "assets/pic/signIn/Login_BG.jpg";
import Line from "assets/pic/home/Line.png";

const SignIn = () => {
  return (
    <SignInContainer>
      <SignInBG>
        <img src={BG} alt="bg" />
      </SignInBG>
      <SignInFormContainer>
        <LineBox>
          <img src={Line} alt="line" />
        </LineBox>
        <SignInForm>
          <SignInTitleContainer>
            <SignInTitle variant="title">享樂酒店，誠摯歡迎</SignInTitle>
            <SignInSubtitle variant="h1">立即開始旅程</SignInSubtitle>
          </SignInTitleContainer>
          <InputContainer>
            <InputBox>
              <InputLabel>電子郵件</InputLabel>
              <Input variant="outlined" placeholder="hello@exsample.com" />
            </InputBox>
            <InputBox>
              <InputLabel>密碼</InputLabel>
              <Input
                variant="outlined"
                placeholder="請輸入密碼"
                type="password"
              />
            </InputBox>
            <InputBox>
              <PasswordBox>
                <PasswordLeft>
                  <Checkbox
                    size="small"
                    sx={{
                      color: "white",
                    }}
                  />
                  <InputLabel>記住帳號</InputLabel>
                </PasswordLeft>
                <Box>
                  <InputLabel>
                    <PasswordForgot>忘記密碼？</PasswordForgot>
                  </InputLabel>
                </Box>
              </PasswordBox>
            </InputBox>
          </InputContainer>
          <InputBox>
            <LoginButton>會員登入</LoginButton>
          </InputBox>
          <InputBox>
            <GoRegister>
              <NotCustomer variant="body1">沒有會員嗎？</NotCustomer>
              <GoRegisterText>前往註冊</GoRegisterText>
            </GoRegister>
          </InputBox>
        </SignInForm>
      </SignInFormContainer>
    </SignInContainer>
  );
};

export default SignIn;
