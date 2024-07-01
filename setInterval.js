function myAlert() {
    alert("Hi");
}
setInterval(myAlert, 3000);

/*The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
It will continue calling the function until clearInterval() is called or the window is closed.
This will call the <b>myAlert</b> function every 3 seconds (1000 ms = 1 second).*/