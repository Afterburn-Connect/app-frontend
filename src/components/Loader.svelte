<div class="loader loader--style6" title="5">
    <svg height="30px" id="Layer_1" style="enable-background:new 0 0 50 50;"
         version="1.1" viewBox="0 0 24 30"
         width="24px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" y="0px">
    <rect fill="#333" height="5" width="4" x="0" y="13">
      <animate attributeName="height" attributeType="XML"
               begin="0s"
               dur="0.6s" repeatCount="indefinite" values="5;21;5"/>
        <animate attributeName="y" attributeType="XML"
                 begin="0s"
                 dur="0.6s" repeatCount="indefinite" values="13; 5; 13"/>
    </rect>
        <rect fill="#333" height="5" width="4" x="10" y="13">
      <animate attributeName="height" attributeType="XML"
               begin="0.15s"
               dur="0.6s" repeatCount="indefinite" values="5;21;5"/>
            <animate attributeName="y" attributeType="XML"
                     begin="0.15s"
                     dur="0.6s" repeatCount="indefinite" values="13; 5; 13"/>
    </rect>
        <rect fill="#333" height="5" width="4" x="20" y="13">
      <animate attributeName="height" attributeType="XML"
               begin="0.3s"
               dur="0.6s" repeatCount="indefinite" values="5;21;5"/>
            <animate attributeName="y" attributeType="XML"
                     begin="0.3s"
                     dur="0.6s" repeatCount="indefinite" values="13; 5; 13"/>
    </rect>
  </svg>
</div>

<style lang="scss">

  @import "../styles";

  .loader {
    text-align: center;
    display: inline-block;
    vertical-align: top;
  }

  /*
    Set the color of the icon
  */
  svg path,
  svg rect {
    fill: $afterburn-deep-blue;
  }
</style>