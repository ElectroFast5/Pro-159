AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" }
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents()
      this.handleClickEvents()
    },
  
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      const placesId = ["car", "lightning", "lightning2", "stickmen"];
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#places-container");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "red",
          opacity: 1
        });
      }
    },

    handleClickEvents: function() {
      this.el.addEventListener("click", (evt)=>{
        const placesContainer = document.querySelector("#places-container")
        const {state} = placesContainer.getAttribute("tour")
        if(state=="places-list") {
          const id = this.el.getAttribute("id")
          //if (placesId.includes(id)) {
            placesContainer.setAttribute("tour", {
              state: "view",
              selectedCard: id
            });
        //}
      }
      })
    },
  
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
    },
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      this.el.addEventListener("mouseleave", ()=> {
        const {selectedItemId} = this.data
        if(selectedItemId){
          const el = document.querySelector(`#${selectedItemId}`)
          const id = el.getAttribute("id")
          if(id==selectedItemId){
            el.setAttribute("material", {
              color: "white",
              opacity: 1
            })
          }
        }
      })
    }
  });
