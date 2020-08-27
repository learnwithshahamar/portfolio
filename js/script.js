// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(progressDesign, {
  strokeWidth: 4,
  easing: "easeInOut",
  duration: 1400,
  color: "red",
  trailColor: "#eee",
  trailWidth: 1,
  svgStyle: {
    width: "100%",
    height: "100%"
  },
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: "#fff",
      position: "absolute",
      right: "0",
      top: "10px",
      padding: 0,
      margin: 0,
      transform: null,
    },
    autoStyleContainer: false,
  },
  from: {
    color: "#FFEA82"
  },
  to: {
    color: "#ED6A5A"
  },
  step: (state, bar) => {
    bar.path.setAttribute("stroke", state.color);
    bar.setText(Math.round(bar.value() * 100) + " %");
  },
});

bar.animate(1.0); // Number from 0.0 to 1.0

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(progressCss, {
  strokeWidth: 4,
  easing: "easeInOut",
  duration: 1400,
  color: "#FFEA82",
  trailColor: "#eee",
  trailWidth: 1,
  svgStyle: {
    width: "100%",
    height: "100%"
  },
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: "#fff",
      position: "absolute",
      right: "0",
      top: "10px",
      padding: 0,
      margin: 0,
      transform: null,
      zIndex: 9999,
    },
    autoStyleContainer: false,
  },
  from: {
    color: "#FFEA82"
  },
  to: {
    color: "#ED6A5A"
  },
  step: (state, bar) => {
    bar.path.setAttribute("stroke", state.color);
    bar.setText(Math.round(bar.value() * 100) + " %");
  },
});

bar.animate(1.0); // Number from 0.0 to 1.0

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(progressWordpress, {
  strokeWidth: 4,
  easing: "easeInOut",
  duration: 1400,
  color: "#e74c3c",
  trailColor: "#eee",
  trailWidth: 1,
  svgStyle: {
    width: "100%",
    height: "100%"
  },
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: "#fff",
      position: "absolute",
      right: "0",
      top: "10px",
      padding: 0,
      margin: 0,
      transform: null,
      zIndex: 9999,
    },
  },
  from: {
    color: "#e74c3c"
  },
  to: {
    color: "#2ecc71"
  },
  step: (state, bar) => {
    bar.path.setAttribute("stroke", state.color);
    bar.setText(Math.round(bar.value() * 100) + " %");
  },
});

bar.animate(0.5); // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle(skillWordpress, {
  color: "#aaa",
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: "easeInOut",
  duration: 1400,
  text: {
    autoStyleContainer: false,
  },
  from: {
    color: "#e74c3c",
    width: 1
  },
  to: {
    color: "#2ecc71",
    width: 4
  },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute("stroke", state.color);
    circle.path.setAttribute("stroke-width", state.width);

    var value = Math.round(circle.value() * 100) + " %";
    if (value === 0) {
      circle.setText("");
    } else {
      circle.setText(value);
    }
  },
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = "1rem";
bar.text.style.color = "#fff";

bar.animate(1.0); // Number from 0.0 to 1.0

// mixitup

var mixer = mixitup(portfolioItems, {
  animation: {
    duration: 300,
    staggerSequence: function (i) {
      return i % 3;
    },
  },
});

//count up
// File#: _1_countup
// Usage: codyhouse.co/license
(function () {
  var CountUp = function (opts) {
    this.options = Util.extend(CountUp.defaults, opts);
    this.element = this.options.element;
    this.initialValue = parseFloat(this.options.initial);
    this.finalValue = parseFloat(this.element.textContent);
    this.intervalId;
    this.animationTriggered = false;
    // animation will run only on browsers supporting IntersectionObserver
    this.canAnimate =
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype;
    initCountUp(this);
  };

  CountUp.prototype.reset = function () {
    // reset element to its initial value
    if (!this.canAnimate) return;
    window.cancelAnimationFrame(this.intervalId);
    this.element.textContent = this.initialValue;
  };

  CountUp.prototype.restart = function () {
    // restart element animation
    countUpAnimate(this);
  };

  function initCountUp(countup) {
    if (!countup.canAnimate) {
      // IntersectionObserver not supported
      countUpShow(countup);
      return;
    }

    // reset countUp for SR
    initCountUpSr(countup);

    // listen for the element to enter the viewport -> start animation
    var observer = new IntersectionObserver(countupObserve.bind(countup), {
      threshold: [0, 0.1],
    });
    observer.observe(countup.element);

    // listen to events
    countup.element.addEventListener("countUpReset", function () {
      countup.reset();
    });
    countup.element.addEventListener("countUpRestart", function () {
      countup.restart();
    });
  }

  function countUpShow(countup) {
    // reveal countup after it has been initialized
    Util.addClass(countup.element.closest(".countup"), "countup--is-visible");
  }

  function countupObserve(entries, observer) {
    // observe countup position -> start animation when inside viewport
    if (
      entries[0].intersectionRatio.toFixed(1) > 0 &&
      !this.animationTriggered
    ) {
      countUpAnimate(this);
    }
  }

  function countUpAnimate(countup) {
    // animate countup
    countup.element.textContent = countup.initialValue;
    countUpShow(countup);
    window.cancelAnimationFrame(countup.intervalId);
    var currentTime = null;

    function runCountUp(timestamp) {
      if (!currentTime) currentTime = timestamp;
      var progress = timestamp - currentTime;
      if (progress > countup.options.duration)
        progress = countup.options.duration;
      var val = getValEaseOut(
        progress,
        countup.initialValue,
        countup.finalValue - countup.initialValue,
        countup.options.duration
      );
      countup.element.textContent = getCountUpValue(val, countup);
      if (progress < countup.options.duration) {
        countup.intervalId = window.requestAnimationFrame(runCountUp);
      } else {
        countUpComplete(countup);
      }
    }

    countup.intervalId = window.requestAnimationFrame(runCountUp);
  }

  function getCountUpValue(val, countup) {
    // reset new countup value to proper decimal places+separator
    if (countup.options.decimal) {
      val = parseFloat(val.toFixed(countup.options.decimal));
    } else {
      val = parseInt(val);
    }
    if (countup.options.separator) val = val.toLocaleString("en");
    return val;
  }

  function countUpComplete(countup) {
    // emit event when animation is over
    countup.element.dispatchEvent(new CustomEvent("countUpComplete"));
    countup.animationTriggered = true;
  }

  function initCountUpSr(countup) {
    // make sure countup is accessible
    // hide elements that will be animated to SR
    countup.element.setAttribute("aria-hidden", "true");
    // create new element with visible final value - accessible to SR only
    var srValue = document.createElement("span");
    srValue.textContent = countup.finalValue;
    Util.addClass(srValue, "sr-only");
    countup.element.parentNode.insertBefore(
      srValue,
      countup.element.nextSibling
    );
  }

  function getValEaseOut(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  }

  CountUp.defaults = {
    element: "",
    separator: false,
    duration: 3000,
    decimal: false,
    initial: 0,
  };

  window.CountUp = CountUp;

  //initialize the CountUp objects
  var countUp = document.getElementsByClassName("js-countup");
  if (countUp.length > 0) {
    for (var i = 0; i < countUp.length; i++) {
      (function (i) {
        var separator = countUp[i].getAttribute("data-countup-sep") ?
          countUp[i].getAttribute("data-countup-sep") :
          false,
          duration = countUp[i].getAttribute("data-countup-duration") ?
          countUp[i].getAttribute("data-countup-duration") :
          CountUp.defaults.duration,
          decimal = countUp[i].getAttribute("data-countup-decimal") ?
          countUp[i].getAttribute("data-countup-decimal") :
          false,
          initial = countUp[i].getAttribute("data-countup-start") ?
          countUp[i].getAttribute("data-countup-start") :
          0;
        new CountUp({
          element: countUp[i],
          separator: separator,
          duration: duration,
          decimal: decimal,
          initial: initial,
        });
      })(i);
    }
  }
})();

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  items: 3,
});

var owl = $(".owl-carousel");
owl.owlCarousel();
// Go to the next item
$(".owl-next").click(function () {
  owl.trigger("next.owl.carousel");
});
// Go to the previous item
$(".owl-prev").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});