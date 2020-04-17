//
// todo: create function which would randomly change both times
// todo: remember good combinations from one fucntion and save those (have them as presets)
//todo: create class with constructor
// todo: create systematic instrument
// todo: collect several functions, create sequence (at least 5)
// todo: no.2 = try creating mulltiple lines in one draw and then clean
// todo: play with it more, maybe change the line hight
// todo(far future): sync wiht music automatically
// todo: take mouse innput (loop(), noLoop())

/**
 * Ctverec with eye in the middle.
 *
 *
 *
 * Can be made to 3d as well I think.
 */

const No1 = () => {
  const fn_1 = (t) => {
    const r = t % SIZE;
    return sin(t / 9) * 200;
  };

  const fn_2 = (t) => {
    return cos(t / 2) * 200;
  };

  line(fn_2(t), fn_1(t), fn_1(-t), fn_2(-t));
  // todo: randomize both times
  // todo: run t_high_lim and t_restart function to each time
  if (t > 100) {
    // background(0);
    t = 50;
  }
};

export default No1;
