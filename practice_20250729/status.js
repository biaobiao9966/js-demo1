import { useState } from "react";

export default function Form() {
  const [answer, setAnswer] = useState("");
  //跟踪用户在输入框内容
  const [error, setError] = useState(null);
  //记录提交失败时的错误信息
  const [status, setStatus] = useState("typing");
  //整个表单的状态机，三种typing submit sucess

  if (status === "success") {
    return <h1>That's right!</h1>;
  }
  //成功状态

  async function handleSubmit(e) {
    e.preventDefault();
    //阻止页面刷新
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  //用户更新时更新answer状态
  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  //表单渲染
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </>
  );
}

//模拟提交函数
function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "lima";
      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}
