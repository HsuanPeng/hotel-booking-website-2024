import { Box, Checkbox, InputLabel, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useTheme } from "@mui/material/styles";
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
  InputLabelBox,
  Input,
  LoginButton,
  PasswordBox,
  CheckBox,
  PasswordForgot,
  GoRegister,
  GoRegisterText,
  NotCustomer,
  LineBox,
  SignUpStepContainer,
  StepNumberContainer,
  StepNumber,
  StepLine,
} from "./SignIn.style";
import BG from "assets/pic/signIn/Login_BG.jpg";
import Line from "assets/pic/home/Line.png";
import { ReactComponent as Check } from "assets/icons/ic_check.svg";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const location = useLocation();
  const isSignIn = location.pathname.includes("signin");
  const theme = useTheme();
  const [isStepOne, setIsStepOne] = useState(true);

  return (
    <SignInContainer>
      <SignInBG>
        <img src={BG} alt="bg" />
      </SignInBG>
      <SignInFormContainer
        sx={{
          paddingBottom: !isStepOne && !isSignIn ? "180px" : "100px",
        }}
      >
        <LineBox>
          <img src={Line} alt="line" />
        </LineBox>
        {isSignIn && (
          <SignInForm>
            <SignInTitleContainer>
              <SignInTitle variant="title">享樂酒店，誠摯歡迎</SignInTitle>
              <SignInSubtitle variant="h1">立即開始旅程</SignInSubtitle>
            </SignInTitleContainer>
            <InputContainer>
              <InputBox>
                <InputLabelBox>電子郵件</InputLabelBox>
                <Input variant="outlined" placeholder="hello@exsample.com" />
              </InputBox>
              <InputBox>
                <InputLabelBox>密碼</InputLabelBox>
                <Input
                  variant="outlined"
                  placeholder="請輸入密碼"
                  type="password"
                />
              </InputBox>
              <InputBox>
                <PasswordBox>
                  <CheckBox>
                    <Checkbox
                      size="small"
                      sx={{
                        color: "white",
                      }}
                    />
                    <InputLabelBox>記住帳號</InputLabelBox>
                  </CheckBox>
                  <InputLabelBox>
                    <PasswordForgot>忘記密碼？</PasswordForgot>
                  </InputLabelBox>
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
        )}
        {!isSignIn && (
          <SignInForm>
            <SignInTitleContainer>
              <SignInTitle variant="title">享樂酒店，誠摯歡迎</SignInTitle>
              <SignInSubtitle variant="h1">立即註冊</SignInSubtitle>
              <SignUpStepContainer>
                <StepNumberContainer>
                  <StepNumber variant="title">
                    {isStepOne && <Box>1</Box>}
                    {!isStepOne && <Check fill="white" />}
                  </StepNumber>
                  <InputLabelBox variant="title">輸入信箱及密碼</InputLabelBox>
                </StepNumberContainer>
                <StepLine />
                <StepNumberContainer>
                  <StepNumber
                    sx={{
                      color: isStepOne ? theme.palette.secondary[60] : "white",
                      border: `1px solid ${theme.palette.secondary[60]}`,
                      backgroundColor: isStepOne
                        ? "transparent"
                        : theme.palette.primary.main,
                    }}
                    variant="title"
                  >
                    2
                  </StepNumber>
                  <InputLabelBox
                    variant="title"
                    sx={{
                      color: isStepOne ? theme.palette.secondary[60] : "white",
                    }}
                  >
                    填寫基本資料
                  </InputLabelBox>
                </StepNumberContainer>
              </SignUpStepContainer>
            </SignInTitleContainer>
            {isStepOne && (
              <InputContainer>
                <InputBox>
                  <InputLabelBox>電子郵件</InputLabelBox>
                  <Input variant="outlined" placeholder="hello@exsample.com" />
                </InputBox>
                <InputBox>
                  <InputLabelBox>密碼</InputLabelBox>
                  <Input
                    variant="outlined"
                    placeholder="請輸入密碼"
                    type="password"
                  />
                </InputBox>
                <InputBox>
                  <InputLabelBox>確認密碼</InputLabelBox>
                  <Input
                    variant="outlined"
                    placeholder="請再輸入一次密碼"
                    type="password"
                  />
                </InputBox>
              </InputContainer>
            )}
            {!isStepOne && (
              <InputContainer>
                <InputBox>
                  <InputLabelBox>姓名</InputLabelBox>
                  <Input variant="outlined" placeholder="請輸入姓名" />
                </InputBox>
                <InputBox>
                  <InputLabelBox>手機號碼</InputLabelBox>
                  <Input variant="outlined" placeholder="請輸入手機號碼" />
                </InputBox>
                <InputBox>
                  <InputLabelBox>生日</InputLabelBox>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <FormControl
                      sx={{
                        maxWidth: "133px",
                        width: "100%",
                      }}
                    >
                      <InputLabel id="demo-simple-select-autowidth-label">
                        年
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        // value={age}
                        // onChange={handleChange}
                        autoWidth
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "8px",
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Twenty</MenuItem>
                        <MenuItem value={21}>Twenty one</MenuItem>
                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl
                      sx={{
                        maxWidth: "133px",
                        width: "100%",
                      }}
                    >
                      <InputLabel id="demo-simple-select-autowidth-label">
                        月
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        // value={age}
                        // onChange={handleChange}
                        autoWidth
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "8px",
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Twenty</MenuItem>
                        <MenuItem value={21}>Twenty one</MenuItem>
                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl
                      sx={{
                        maxWidth: "133px",
                        width: "100%",
                      }}
                    >
                      <InputLabel id="demo-simple-select-autowidth-label">
                        日
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        // value={age}
                        // onChange={handleChange}
                        autoWidth
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "8px",
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Twenty</MenuItem>
                        <MenuItem value={21}>Twenty one</MenuItem>
                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </InputBox>
                <InputBox>
                  <InputLabelBox>地址</InputLabelBox>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <FormControl
                      sx={{
                        maxWidth: "204px",
                        width: "100%",
                      }}
                    >
                      <InputLabel id="demo-simple-select-autowidth-label">
                        縣市
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        // value={age}
                        // onChange={handleChange}
                        autoWidth
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "8px",
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Twenty</MenuItem>
                        <MenuItem value={21}>Twenty one</MenuItem>
                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl
                      sx={{
                        maxWidth: "204px",
                        width: "100%",
                      }}
                    >
                      <InputLabel id="demo-simple-select-autowidth-label">
                        區域
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        // value={age}
                        // onChange={handleChange}
                        autoWidth
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "8px",
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Twenty</MenuItem>
                        <MenuItem value={21}>Twenty one</MenuItem>
                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </InputBox>
                <InputBox>
                  <Input variant="outlined" placeholder="請輸入詳細地址" />
                </InputBox>
                <InputBox>
                  <CheckBox>
                    <Checkbox
                      size="small"
                      sx={{
                        color: "white",
                      }}
                    />
                    <InputLabelBox>
                      我已閱讀並同意本網站個資使用規範
                    </InputLabelBox>
                  </CheckBox>
                </InputBox>
              </InputContainer>
            )}
            <InputBox>
              {isStepOne && (
                <LoginButton
                  onClick={() => {
                    setIsStepOne(false);
                  }}
                >
                  下一步
                </LoginButton>
              )}
              {!isStepOne && <LoginButton>完成註冊</LoginButton>}
              <GoRegister>
                <NotCustomer variant="body1">已經有會員了嗎？</NotCustomer>
                <GoRegisterText>立即登入</GoRegisterText>
              </GoRegister>
            </InputBox>
          </SignInForm>
        )}
      </SignInFormContainer>
    </SignInContainer>
  );
};

export default SignIn;
