const binaryClock = {
  style: `
        top: 20px;
        left: 20px;

        .bit {
            height: 25px;
            width: 25px;
            border-radius: 20%;
            display: inline-block;
            border: 3px solid #de4aaf; /* light grey */
            opacity: 0.8;
            margin: 0px 10px 10px 0px;
        }

        .active {
            background-color: #2bd894; /* green for active bits */
        }

        .row {
            display: flex;
        }
    `,

  update: function (domEl) {
    var now = new Date();

    // Update the seconds
    this.updateRow(
      domEl,
      this.toFixedBinaryString(now.getSeconds()),
      "seconds"
    );

    // Update minutes and hours only if the minute has changed
    if (
      !this.lastDisplayed ||
      now.getMinutes() !== this.lastDisplayed.getMinutes()
    ) {
      this.updateRow(
        domEl,
        this.toFixedBinaryString(now.getMinutes()),
        "minutes"
      );
      this.updateRow(domEl, this.toFixedBinaryString(now.getHours()), "hours");
    }

    // Store the last displayed time to avoid redundant updates
    this.lastDisplayed = now;
  },

  toFixedBinaryString: function (int) {
    return int.toString(2).padStart(6, "0");
  },

  updateRow: function (domEl, data, row) {
    let bits = $(domEl).find(`#${row} .bit`);
    for (let i = 0; i < data.length; i++) {
      if (parseInt(data.charAt(i), 10)) {
        bits.eq(i).addClass(this.activeClass);
      } else {
        bits.eq(i).removeClass(this.activeClass);
      }
    }
  },

  render: function () {
    return `
            <span id="hours" class="row">
                <span class="bit"></span><span class="bit"></span><span class="bit"></span>
                <span class="bit"></span><span class="bit"></span><span class="bit"></span>
            </span>
            <span id="minutes" class="row">
                <span class="bit"></span><span class="bit"></span><span class="bit"></span>
                <span class="bit"></span><span class="bit"></span><span class="bit"></span>
            </span>
            <span id="seconds" class="row">
                <span class="bit"></span><span class="bit"></span><span class="bit"></span>
                <span class="bit"></span><span class="bit"></span><span class="bit"></span>
            </span>
        `;
  },

  refreshFrequency: 1000,

  lastDisplayed: null,

  activeClass: "active",
};

// To render and update the clock:
const container = document.getElementById("clock");
container.innerHTML = binaryClock.render(); // Render the initial clock structure

// Start updating the clock every second
setInterval(() => {
  binaryClock.update(container);
}, binaryClock.refreshFrequency);
