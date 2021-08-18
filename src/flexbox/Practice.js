import React from "react";
import "./Practice.css";

function Practice(props) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Flexbox Basis Gotchas</title>
        <link
          rel="stylesheet"
          type="text/css"
          media="screen"
          href="css/base.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          media="screen"
          href="css/flex-basis-gotchas.css"
        />
      </head>
      <body>
        <div class="container auto-zero-container">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
          <div class="item">4</div>
        </div>

        <div class="container max-width-container">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
          <div class="item">4</div>
        </div>

        <div class="container min-width-container">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
          <div class="item">4</div>
        </div>

        <div class="container max-height-container">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
          <div class="item">4</div>
        </div>

        <div class="container min-height-container">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
          <div class="item">4</div>
        </div>
      </body>
    </html>
  );
}

export default Practice;
