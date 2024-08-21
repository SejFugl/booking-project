import React from "react";

const NavBar: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingTop: 24,
        paddingBottom: 24,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 24,
        display: "inline-flex",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          paddingLeft: 56,
          paddingRight: 56,
          justifyContent: "space-between",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            color: "#3282B8",
            fontSize: 48,
            fontFamily: "Source Sans Pro",
            fontWeight: "900",
            wordWrap: "break-word",
          }}
        >
          Rsrv
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 32,
            display: "flex",
          }}
        >
          <div
            style={{
              color: "#3282B8",
              fontSize: 20,
              fontFamily: "Source Sans Pro",
              fontWeight: "600",
                wordWrap: "break-word",
            }}
          >
            Funktioner
          </div>
          <div
            style={{
              color: "#616161",
              fontSize: 20,
              fontFamily: "Source Sans Pro",
              fontWeight: "400",
                wordWrap: "break-word",
            }}
          >
            Priser
          </div>
          <div
            style={{
              color: "#616161",
              fontSize: 20,
              fontFamily: "Source Sans Pro",
              fontWeight: "400",
                wordWrap: "break-word",
            }}
          >
            Brancher
          </div>
          <div
            style={{
              color: "#616161",
              fontSize: 20,
              fontFamily: "Source Sans Pro",
              fontWeight: "400",
                wordWrap: "break-word",
            }}
          >
            Om
          </div>
          <div
            style={{
              color: "#616161",
              fontSize: 20,
              fontFamily: "Source Sans Pro",
              fontWeight: "400",
                wordWrap: "break-word",
            }}
          >
            Mere
          </div>
          <div
            style={{
              width: 150,
              height: 40,
              paddingLeft: 16,
              paddingRight: 16,
              borderRadius: 4,
              border: "2px #3282B8 solid",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                color: "#3282B8",
                fontSize: 20,
                fontFamily: "Source Sans Pro",
                fontWeight: "600",
                    wordWrap: "break-word",
              }}
            >
              Kom i gang
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ alignSelf: "stretch", height: 0, border: "1px #E5E5E5 solid" }}
      ></div>
    </div>
  );
};

export default NavBar;
