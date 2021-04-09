import React, { useState, useRef, useEffect } from "react";
import { Modal, useWindowDimensions } from "react-native";
import { WebView } from "react-native-webview";
import localStorage from "../../Utils/localStorage";

interface ITrelloLogin {
  data: string | null;
  show: boolean;
}

function TrelloLogin({ data, show }: ITrelloLogin) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [currentUrl, setCurrentUrl] = useState("");
  const [token, setToken] = useState("");
  const [showModal, setShowModal] = useState(show);
  const successUrl = "https://trello.com/1/token/approve";
  const webviewRef = useRef<WebView>(null);

  useEffect(() => {
    if (webviewRef && currentUrl === successUrl) {
      const run = `const token = document.querySelector('pre').innerHTML; window.ReactNativeWebView.postMessage(token); true;`;
      setTimeout(() => {
        webviewRef.current?.injectJavaScript(run);
      }, 1000);
    }
  }, [webviewRef, currentUrl]);

  useEffect(() => {
    if (token) {
      localStorage.create("@Token", token);
    }
  }, [token]);

  return data ? (
    <Modal transparent={true} visible={showModal}>
      <WebView
        ref={webviewRef}
        style={{ width: windowWidth, height: windowHeight }}
        originWhitelist={["*"]}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{
          html: data,
          baseUrl: "https://trello.com",
        }}
        onNavigationStateChange={(navEvent) => {
          console.log("navevent", navEvent.url);
          setCurrentUrl(navEvent.url);
          if (navEvent.url.search("boards") > -1) {
            console.log("denied");

            setShowModal(false);
          }
        }}
        onMessage={(event) => {
          if (event.nativeEvent.data) {
            console.log("accepted");

            setToken(event.nativeEvent.data);
            setShowModal(false);
          }
        }}
      />
    </Modal>
  ) : (
    <></>
  );
}

export default TrelloLogin;
