import React from "react";
import DropdownComponent from "./components/DropdownComponent.js";
import TreeData from "./components/TreeData.js";
import "./App.css";
import 'antd/dist/antd.css';

const list_options = [
  {
    id: 1,
    name: "One",
  },
  {
    id: 2,
    name: "Two",
  },
  {
    id: 3,
    name: "Three",
  },
  {
    id: 4,
    name: "Four",
  },
  {
    id: 5,
    name: "Five",
  },
];

function App() {
  const [mode, setMode] = React.useState(
    <i class="fas fa-twitter-square    "></i>
  );

  const handleClick = React.useCallback((e) => {
    e.target.value === "single" ? setMode(false) : setMode(true);
  }, []);

  return (
    <div
      style={{
        fontSize: "30px",
        fontFamily: "font-family: 'Noto Sans JP', sans-serif",
        margin: "5%",
      }}
    >
      <div>
        <img src="https://img.icons8.com/color/48/000000/hand-right.png" />
        <span style={{ marginLeft: "5px", fontWeight: "bold" }}>
          You are in:
        </span>
        <div onClick={handleClick} className="button-mode">
          <button
            style={{ backgroundColor: mode == false ? "#0096871f" : "white" }}
            value="single"
          >
            Single Mode
          </button>
          <button
            style={{ backgroundColor: mode == true ? "#0096871f" : "white" }}
            value="multiple"
          >
            Multiple mode
          </button>
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <img
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTE1NC4wMTE2Nyw3MC44NDI1Yy0xLjAwMzMzLC00LjM3MTY3IC0zLjAxLC04LjQ1NjY3IC00Ljk4MDgzLC0xMi41MDU4M2MtMi4zMjkxNywtNC44MDE2NyAtMy42NTUsLTkuMzg4MzMgLTUuOTg0MTcsLTE0LjIyNTgzYy0xLjg5OTE3LC0zLjg3IC0zLjgzNDE3LC03LjgxMTY3IC02LjUyMTY3LC0xMS4xOGMtOC44ODY2NywtMTEuMTggLTI0LjA0NDE3LC0xNS4xNTc1IC0zOC4wNTUsLTE3LjcwMTY3Yy04LjM4NSwtMS41MDUgLTE2LjkxMzMzLC0zLjA0NTgzIC0yNS4zNywtMS45MzVjLTUuNDQ2NjcsMC42ODA4MyAtMTAuNjc4MzMsMi40NzI1IC0xNS43NjY2Nyw0LjUxNWMtOC4xNywzLjI2MDgzIC0xNS4xOTMzMyw3Ljg4MzMzIC0yMS40MjgzMywxNC4wODI1Yy0yMC4zNTMzMywxOC45OTE2NyAtMjguMzQ0MTcsNDkuNTIxNjcgLTIwLjM4OTE3LDc2LjE4MTY3YzEuNDMzMzMsNC42OTQxNyAzLjI5NjY3LDkuMjgwODMgNS4zMDMzMywxMy43NmMxLjc1NTgzLDMuOTA1ODMgMy42NTUsNy44MTE2NyA2LjA1NTgzLDExLjM1OTE3YzYuOTE1ODMsMTAuMTc2NjcgMTguMzQ2NjcsMTUuNDA4MzMgMjkuNjM0MTcsMjAuMjgxNjdjNC4zNzE2NywxLjg2MzMzIDguODUwODMsMy41MTE2NyAxMy41MDkxNyw0LjU1MDgzYzEzLjgzMTY3LDMuMTUzMzMgMjguNTk1LDAuOTMxNjcgNDEuNjM4MzMsLTQuNjk0MTdjMTkuMTcwODMsLTguMjc3NSAzNS41MTA4MywtMjIuODI1ODMgNDEuMTcyNSwtNDIuOTI4MzNjMi4zMjkxNywtOC4yNzc1IDEuODYzMzMsLTE3LjIgMi4wNzgzMywtMjUuOGMwLjEwNzUsLTQuNTg2NjcgMC4xNDMzMywtOS4yODA4MyAtMC44OTU4MywtMTMuNzZ6TTEyNi4wOTc1LDEyNC4xOTgzM2MtMTUuNzMwODMsMTUuOTEgLTQwLjk5MzMzLDIxLjYwNzUgLTYyLjAyNzUsMTMuOTM5MTdjLTIxLjAzNDE3LC03LjY2ODMzIC0zNS40MDMzMywtMjcuMzc2NjcgLTM3LjE5NSwtNDkuNjY1Yy0xLjI5LC0xNS45NDU4MyAzLjE1MzMzLC0zMi42OCAxNS44NzQxNywtNDIuMzE5MTdjMTAuNTM1LC04LjMxMzMzIDIyLjQzMTY3LC0xNS40NDQxNyAzNS43MjU4MywtMTYuOTg1YzguMDYyNSwtMC45MzE2NyAxNi4xOTY2NywwLjE3OTE3IDI0LjE4NzUsMS4zMjU4M2M5LjA2NTgzLDEuMjU0MTcgMTguOTIsMi45MzgzMyAyNC45NCw5LjgxODMzYzIuNTQ0MTcsMi45MzgzMyA0LjE1NjY3LDYuNTkzMzMgNS44MDUsMTAuMTA1YzIuMDA2NjcsNC4xOTI1IDQuMTU2NjcsOC4zNDkxNyA1LjgwNSwxMi43MjA4M2M3LjkxOTE3LDIwLjkyNjY3IDIuNjE1ODMsNDUuMTE0MTcgLTEzLjExNSw2MS4wNnoiIGZpbGw9IiMwMDk2ODgiPjwvcGF0aD48cGF0aCBkPSJNODMuMDMzLDE2MS4yMzU2N2MtNC42MDEsMCAtOS4xMDUyNSwtMC40ODM3NSAtMTMuNDE5NTgsLTEuNDU4NDJjLTQuMjQ5ODMsLTAuOTYwMzMgLTguNzY0ODMsLTIuNDgzMjUgLTEzLjgxMDE3LC00LjY2MTkyYy0xMi41MzA5MiwtNS4zOTY1IC0yMy40NzA4MywtMTAuNjkyNjcgLTMwLjQwODE3LC0yMC45MjMwOGMtMi41NjIwOCwtMy43ODA0MiAtNC40OTcwOCwtNy44MjYgLTYuMTk5MTcsLTExLjYzMTVjLTIuNDY4OTIsLTUuNTAwNDIgLTQuMTI4LC05LjgxNDc1IC01LjM3NSwtMTMuOTg5MzNjLTguMTczNTgsLTI3LjM0OCAwLjIwMDY3LC01OC42NzcwOCAyMC44MzcwOCwtNzcuOTczMzNjNi4zNzQ3NSwtNi4zNDI1IDEzLjU4MDgzLC0xMS4wNzI1IDIyLjAyMzE3LC0xNC40NjIzM2M0LjMzOTQyLC0xLjc0MTUgMTAuMDk3ODMsLTMuODQ0OTIgMTYuMjAwMjUsLTQuNjM2ODNjOC43OTcwOCwtMS4xMjg3NSAxNy40OTc0MiwwLjQ0MDc1IDI1LjkxMTA4LDEuOTY3MjVjMTQuMTg2NDIsMi41NzY0MiAyOS45MzE1OCw2Ljc2ODkyIDM5LjE0MDc1LDE4LjMzNTkyYzIuODM0NDIsMy41NjU0MiA0LjgwODgzLDcuNjE4MTcgNi43MTg3NSwxMS41MzgzM2MxLjIxMTE3LDIuNDc2MDggMi4xNTcxNyw0LjkwNTU4IDMuMDY3MzMsNy4yNTI2N2MwLjg4MTUsMi4yNzU0MiAxLjc5NTI1LDQuNjIyNSAyLjkzMTE3LDYuOTU4ODNjMS45ODUxNyw0LjA2MzUgNC4wMzg0Miw4LjI3MDMzIDUuMTA5ODMsMTIuODg1NjdjMS4wODU3NSw0LjcxMjA4IDEuMDY0MjUsOS42MTA1IDAuOTQ5NTgsMTQuMjIyMjVjLTAuMDQ2NTgsMS43MTI4MyAtMC4wNjA5MiwzLjQzNjQyIC0wLjA3NTI1LDUuMTZjLTAuMDY0NSw2Ljk4MDMzIC0wLjEyOSwxNC4yMDQzMyAtMi4wNjA0MiwyMS4wNTU2N2MtNS4zNjQyNSwxOS4wMDk1OCAtMjAuMzQ5NzUsMzQuNjY1MTcgLTQyLjE5MDE3LDQ0LjA4NTc1Yy05LjYyODQyLDQuMTQ5NSAtMTkuNzAxMTcsNi4yNzQ0MiAtMjkuMzUxMDgsNi4yNzQ0MnpNNzkuMTIsMTQuNjk4ODNjLTEuOTM1LDAgLTMuODYyODMsMC4xMDc1IC01Ljc4MzUsMC4zNTgzM2MtNS43MDEwOCwwLjczODE3IC0xMS4xODM1OCwyLjc0MTI1IC0xNS4zMjIzMyw0LjQwMzkyYy03Ljk5NDQyLDMuMjEwNjcgLTE0LjgxNzA4LDcuNjg5ODMgLTIwLjg1MTQyLDEzLjY5OTA4Yy0wLjAxNDMzLDAuMDE0MzMgLTAuMDI4NjcsMC4wMjUwOCAtMC4wMzk0MiwwLjAzOTQyYy0xOS42ODMyNSwxOC4zODYwOCAtMjcuNjcwNSw0OC4yNjM5MiAtMTkuODY5NTgsNzQuMzQ3YzEuMTk2ODMsNC4wMTY5MiAyLjgwMjE3LDguMTk1MDggNS4yMDY1OCwxMy41NDg1OGMxLjY0MTE3LDMuNjU4NTggMy40OTAxNyw3LjUzOTMzIDUuODk4MTcsMTEuMDkwNDJjNi4zOTI2Nyw5LjQyNDE3IDE2Ljg1MjQyLDE0LjQ2OTUgMjguODYwMTcsMTkuNjQwMjVjNC44NDQ2NywyLjA4NTUgOS4xNTksMy41NDM5MiAxMy4xODY2Nyw0LjQ1NzY3YzEyLjYzNDgzLDIuODU1OTIgMjcuMDM2MjUsMS4yMTgzMyA0MC41NDksLTQuNjExNzVjMjAuODMzNSwtOC45ODcgMzUuMDk4NzUsLTIzLjgxODQyIDQwLjE2MiwtNDEuNzY3MzNjMS44MDI0MiwtNi4zOTI2NyAxLjg2NjkyLC0xMy4zNjU4MyAxLjkyNzgzLC0yMC4xMTMyNWMwLjAxNzkyLC0xLjc0ODY3IDAuMDMyMjUsLTMuNDkzNzUgMC4wNzUyNSwtNS4yMjA5MmMwLjExNDY3LC00LjU2MTU4IDAuMTM2MTcsLTkuMDE5MjUgLTAuODU2NDIsLTEzLjMyMjgzYy0wLjk3NDY3LC00LjIyMTE3IC0yLjkzODMzLC04LjIzODA4IC00LjgzNzUsLTEyLjEyMjQyYy0xLjIwNCwtMi40NzI1IC0yLjE0NjQyLC00Ljg5MTI1IC0zLjA1NjU4LC03LjIzNDc1Yy0wLjg4NTA4LC0yLjI3OSAtMS44MDI0MiwtNC42MzY4MyAtMi45NDU1LC02Ljk4MzkyYy0xLjgyNzUsLTMuNzQ0NTggLTMuNzEyMzMsLTcuNjE0NTggLTYuMzA2NjcsLTEwLjg3MTgzYy04LjQ2NzQyLC0xMC42NDI1IC0yMy40NDIxNywtMTQuNTg3NzUgLTM2Ljk2OTI1LC0xNy4wNDIzM2MtNi4yNDkzMywtMS4xMzIzMyAtMTIuNjYzNSwtMi4yOTMzMyAtMTkuMDI3NSwtMi4yOTMzM3pNMzUuODk3ODMsMzEuODg4MDhoMC4wMzU4M3oiIGZpbGw9IiMwMTAxMDEiPjwvcGF0aD48cGF0aCBkPSJNNzcuMDQxNjcsOTQuOTU4MzNjOC43NDMzMywtMTEuMDU4MTcgMTUuMzU0NTgsLTE5LjA5NTU4IDI0LjA5NzkyLC0zMC4xNTM3NWM0LjE4ODkyLC01LjI5OTc1IDkuODE4MzMsLTguOTI2MDggMTUuMzE4NzUsLTEyLjg0NjI1Yy0xLjM2MTY3LDUuMTQ5MjUgLTcuNjIxNzUsMTcuMTg5MjUgLTEwLjc1LDIxLjVjLTUuMjcxMDgsNy4yNjM0MiAtNi40NTcxNywxMC4wMzY5MiAtMTAuNzUsMTcuOTE2NjdjLTYuNDY0MzMsMTEuODY0NDIgLTExLjE4NzE3LDE5LjEzODU4IC0xNy4yNDY1OCwzMS4yMTQ0MmMtMy41MjYsLTguOTc5ODMgLTEyLjgyNDc1LC0xNi45MDI1OCAtMTguNDgyODMsLTI0LjcxNzgzYy00LjkzNDI1LC02LjgxOTA4IC0xNC42Mzc5MiwtMjAuOTY5NjcgLTE0LjQzNzI1LC0yMC44Mjk5MmM5Ljc1NzQyLDYuODg3MTcgMjMuMDAxNDIsMTAuMzU5NDIgMzIuMjUsMTcuOTE2Njd6IiBmaWxsPSIjMDA5Njg4Ij48L3BhdGg+PHBhdGggZD0iTTc3LjcxMTc1LDEyNC4zODEwOGMtMC4wMjg2NywwIC0wLjA1Mzc1LDAgLTAuMDc4ODMsLTAuMDAzNThjLTAuNzA1OTIsLTAuMDMyMjUgLTEuMzI5NDIsLTAuNDc2NTggLTEuNTg3NDIsLTEuMTMyMzNjLTIuMTg1ODMsLTUuNTc5MjUgLTYuODUxMzMsLTEwLjg3MTgzIC0xMS4zNjI3NSwtMTUuOTk2Yy0yLjUxNTUsLTIuODUyMzMgLTQuODkxMjUsLTUuNTUwNTggLTYuOTAxNSwtOC4zMjQwOGMtMTUuNjkxNDIsLTIxLjY5MzUgLTE1LjQ3MjgzLC0yMS45MTIwOCAtMTQuMjYxNjcsLTIzLjE0MTE3YzAuNjEyNzUsLTAuNjE5OTIgMS41OTQ1OCwtMC43MDU5MiAyLjMxMTI1LC0wLjIwNDI1YzQuMzQ2NTgsMy4wNjM3NSA5LjU3NDY3LDUuNTE0NzUgMTQuNjMwNzUsNy44ODMzM2M1LjYwNDMzLDIuNjI2NTggMTEuMzkxNDIsNS4zMzU1OCAxNi4yODYyNSw4Ljk5MDU4YzMuOTIzNzUsLTQuOTUyMTcgNy40MzU0MiwtOS4zMjM4MyAxMC45NTQyNSwtMTMuNjkxOTJjMy44MzQxNywtNC43NzMgNy42NzE5MiwtOS41NDI0MiAxMi4wMzY0MiwtMTUuMDY3OTJjMy44MjcsLTQuODQxMDggOC44MTUsLTguMzQ5MTcgMTMuNjM4MTcsLTExLjc0MjU4bDIuMDQ5NjcsLTEuNDQ3NjdjMC42MTYzMywtMC40MzcxNyAxLjQ0MDUsLTAuNDQ3OTIgMi4wNTY4MywtMC4wMTQzM2MwLjYyMzUsMC40MyAwLjkwNjU4LDEuMjAwNDIgMC43MTMwOCwxLjkzMTQyYy0xLjQ3NjMzLDUuNTkgLTcuOTYyMTcsMTcuODU5MzMgLTExLjAzMzA4LDIyLjA5NDgzYy00LjI1MzQyLDUuODYyMzMgLTUuNzgzNSw4LjcxODI1IC04LjU2Nzc1LDEzLjkwMzMzbC0yLjA1NjgzLDMuODE2MjVjLTIuNTExOTIsNC42MDgxNyAtNC43NTg2Nyw4LjUyNDc1IC02LjkyNjU4LDEyLjMwMTU4Yy0zLjM5Nyw1LjkxNjA4IC02LjYwNzY3LDExLjUwNjA4IC0xMC4yOTQ5MiwxOC44NjI2N2MtMC4zMTE3NSwwLjU5ODQyIC0wLjkzMTY3LDAuOTgxODMgLTEuNjA1MzMsMC45ODE4M3pNNTAuODE4ODMsODIuNzUzNWMzLjA4ODgzLDQuNDg5OTIgNy4xMjAwOCwxMC4yNzcgOS44NjQ5MiwxNC4wNzE3NWMxLjkwNjMzLDIuNjMzNzUgNC4yMjgzMyw1LjI3MTA4IDYuNjgyOTIsOC4wNTUzM2MzLjgzMDU4LDQuMzUwMTcgNy43NjUwOCw4LjgxODU4IDEwLjQwNiwxMy42NDUzM2MzLjA1NjU4LC01Ljg5NDU4IDUuODIyOTIsLTEwLjcxNDE3IDguNzI5LC0xNS43NzM4M2MyLjE1MzU4LC0zLjc1MTc1IDQuMzg5NTgsLTcuNjQ2ODMgNi44ODM1OCwtMTIuMjI5OTJsMi4wNDk2NywtMy43OTgzM2MyLjg1NTkyLC01LjMyNDgzIDQuNDI5LC04LjI1OTU4IDguODI1NzUsLTE0LjMxNTQyYzIuMjcxODMsLTMuMTI4MjUgNi4wNjY1OCwtMTAuMTQ4IDguNDc0NTgsLTE1LjYxNjE3Yy0zLjgwOTA4LDIuNzQxMjUgLTcuMzQ5NDIsNS41MjkwOCAtMTAuMTkxLDkuMTMwMzNjLTQuMzc1MjUsNS41MzI2NyAtOC4yMTY1OCwxMC4zMDkyNSAtMTIuMDU3OTIsMTUuMDg1ODNjLTMuODM0MTcsNC43NzMgLTcuNjcxOTIsOS41NDI0MiAtMTIuMDM2NDIsMTUuMDY3OTJjLTAuMjk3NDIsMC4zNzI2NyAtMC43MzQ1OCwwLjYxNjMzIC0xLjIxNDc1LDAuNjcwMDhjLTAuNDc2NTgsMC4wNjA5MiAtMC45NTY3NSwtMC4wODYgLTEuMzI1ODMsLTAuMzk0MTdjLTQuODM3NSwtMy45NTI0MiAtMTEuMDA0NDIsLTYuODQwNTggLTE2Ljk3MDY3LC05LjYzNTU4Yy0yLjcwNTQyLC0xLjI3MjA4IC01LjQ1MzgzLC0yLjU2NTY3IC04LjExOTgzLC0zLjk2MzE3eiIgZmlsbD0iIzAxMDEwMSI+PC9wYXRoPjxwYXRoIGQ9Ik04My40MiwxNDMuMjU4MDhjLTYuODExOTIsMCAtMTMuNTk4NzUsLTEuMTIxNTggLTE5Ljk2Mjc1LC0zLjQ0Yy0yMS40MzU1LC03LjgxMTY3IC0zNi40OTYyNSwtMjcuOTEwNTggLTM4LjM2Njc1LC01MS4yMDIyNWMtMS41MTkzMywtMTguNzU1MTcgNC41MjIxNywtMzQuNzU0NzUgMTYuNTc2NSwtNDMuODkyMjVjMTMuMjU4MzMsLTEwLjQ2MzMzIDI0Ljg5NywtMTUuOTc4MDggMzYuNjAzNzUsLTE3LjMzOTc1YzguNDkyNSwtMC45NzgyNSAxNy4wNzgxNywwLjI0NzI1IDI0LjY0OTc1LDEuMzMzYzEwLjE0MDgzLDEuNDA4MjUgMTkuNzcyODMsMy4yNjA4MyAyNi4wMzI5MiwxMC40MTMxN2MyLjUxNTUsMi45MDYwOCA0LjEzMTU4LDYuMzU2ODMgNS42OTM5Miw5LjcwMDA4bDEuNjUxOTIsMy40NGMxLjYwMTc1LDMuMjk2NjcgMy4yNjA4Myw2LjcwMDgzIDQuNTkwMjUsMTAuMjMwNDJjOC4xODA3NSwyMS42MjE4MyAyLjg4MSw0Ni4zMzYwOCAtMTMuNTEyNzUsNjIuOTUyYy0wLjAwMzU4LDAgLTAuMDAzNTgsMCAtMC4wMDM1OCwwYy0xMS4zNDg0MiwxMS40ODQ1OCAtMjcuNzM4NTgsMTcuODA1NTggLTQzLjk1MzE3LDE3LjgwNTU4ek04NC44MDY3NSwzMC42MTI0MmMtMi4wNDYwOCwwIC00LjA5NTc1LDAuMTAwMzMgLTYuMTIzOTIsMC4zMzY4M2MtMTEuMDE1MTcsMS4yNzU2NyAtMjIuMDg0MDgsNi41NTc1IC0zNC44MjY0MiwxNi42MTIzM2MtMTEuMDg2ODMsOC40MDI5MiAtMTYuNjE1OTIsMjMuMjUyMjUgLTE1LjE5NjkyLDQwLjc3MTE3YzEuNzU5NDIsMjEuODk3NzUgMTUuOTAyODMsNDAuNzg5MDggMzYuMDIzMjUsNDguMTI0MTdjMjAuMjM1MDgsNy4zNzQ1IDQ0Ljk2NzI1LDEuODI3NSA2MC4xMzkwOCwtMTMuNTEyNzV2MGMxNS40MTU1LC0xNS42MTk3NSAyMC4zOTk5MiwtMzguODQ2OTIgMTIuNzEzNjcsLTU5LjE2OGMtMS4yNzIwOCwtMy4zNzU1IC0yLjg5NTMzLC02LjcwOCAtNC40NjEyNSwtOS45Mjk0MmwtMS42NzM0MiwtMy40OTAxN2MtMS40NTg0MiwtMy4xMTc1IC0yLjk2NywtNi4zNDYwOCAtNS4xNTI4MywtOC44Njg3NWMtNS40NDMwOCwtNi4yMTM1IC0xNC4zNzk5MiwtNy45MDQ4MyAtMjMuODI5MTcsLTkuMjE2MzNjLTUuNTA0LC0wLjc5MTkyIC0xMS41NTYyNSwtMS42NTkwOCAtMTcuNjEyMDgsLTEuNjU5MDh6TTEyNi4wOTc1LDEyNC4xOTgzM2gwLjAzNTgzeiIgZmlsbD0iIzAxMDEwMSI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
        />
        <span style={{ marginLeft: "5px", fontWeight: "bold" }}>
          Pick your selection
        </span>
        {mode ? (
          <div>
            <DropdownComponent isMulti={mode} data={list_options} />
          </div>
        ) : (
          <div>
            <DropdownComponent isMulti={mode} data={list_options} />
          </div>
        )}
      </div>
      <TreeData/>
    </div>
  );
}

export default App;
