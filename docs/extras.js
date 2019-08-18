// EXTRAS.JS
// this file provides a starting point for further modifications
// to Lissajous. Load your samples and helper functions here.


// chorus and tremolo use tuna, so we should load it here
var tuna = new Tuna(context);


// _rint is a random integer generator, useful for
// creating random melodies on the fly.
function _rint(length, min, max) {
  var numbers = [];
  for(var i = 0; i < length; i++) {
    numbers.push( Math.floor(Math.random() * (max - min) + min) );
  }
  return numbers;
}


// _m is for multiplicity. the first argument is the value,
// the second argument is the number of times you want to
// repeat it. e.g. `_m(4, 8)` produces [4, 4, 4, 4, 4, 4, 4, 4]
// and `_m([0,1,2], 3)` produces [0, 1, 2, 0, 1, 2, 0, 1, 2].
// the Lissajous API will combine multiple array arguments
// into a single array automatically, allowing you to do things
// like track.beat( _m(4, 8), _m(2, 16) )
function _m(value, iterations) {
  var values = [];
  for(var i = 0; i < iterations; i++) {
    if(Array.isArray(value)) {
      values = values.concat(value);
    } else {
      values.push(value);
    }
  }
  return values;
}

// Wrap all these samples being loaded in an timeout with a duration of 0. This
// forces it to wait at the back of the event queue, making sure the UI and what
// not can finish rendering before we attempt this.
setTimeout(() => {
window.ambi = []
loadSounds([
  './samples/ambi_choir.flac',
  './samples/ambi_dark_woosh.flac',
  './samples/ambi_drone.flac',
  './samples/ambi_glass_hum.flac',
  './samples/ambi_glass_rub.flac',
  './samples/ambi_haunted_hum.flac',
  './samples/ambi_lunar_land.flac',
  './samples/ambi_piano.flac',
  './samples/ambi_sauna.flac',
  './samples/ambi_soft_buzz.flac',
  './samples/ambi_swoosh.flac',
], list => ambi = list)

window.bass = []
loadSounds([
  './samples/bass_dnb_f.flac',
  './samples/bass_drop_c.flac',
  './samples/bass_hard_c.flac',
  './samples/bass_hit_c.flac',
  './samples/bass_thick_c.flac',
  './samples/bass_trance_c.flac',
  './samples/bass_voxy_c.flac',
  './samples/bass_voxy_hit_c.flac',
  './samples/bass_woodsy_c.flac',
], list => bass = list)

window.bd = []
loadSounds([
  './samples/bd_808.flac',
  './samples/bd_ada.flac',
  './samples/bd_boom.flac',
  './samples/bd_fat.flac',
  './samples/bd_gas.flac',
  './samples/bd_haus.flac',
  './samples/bd_klub.flac',
  './samples/bd_mehackit.flac',
  './samples/bd_pure.flac',
  './samples/bd_sone.flac',
  './samples/bd_tek.flac',
  './samples/bd_zome.flac',
  './samples/bd_zum.flac',
], list => bd = list)

window.drum = []
loadSounds([
  './samples/drum_bass_hard.flac',
  './samples/drum_bass_soft.flac',
  './samples/drum_cowbell.flac',
  './samples/drum_cymbal_closed.flac',
  './samples/drum_cymbal_open.flac',
  './samples/drum_cymbal_pedal.flac',
  './samples/drum_cymbal_soft.flac',
  './samples/drum_cymbal_hard.flac',
  './samples/drum_heavy_kick.flac',
  './samples/drum_roll.flac',
  './samples/drum_snare_hard.flac',
  './samples/drum_snare_soft.flac',
  './samples/drum_splash_hard.flac',
  './samples/drum_splash_soft.flac',
  './samples/drum_tom_hi_hard.flac',
  './samples/drum_tom_hi_soft.flac',
  './samples/drum_tom_lo_hard.flac',
  './samples/drum_tom_lo_soft.flac',
  './samples/drum_tom_mid_hard.flac',
  './samples/drum_tom_mid_soft.flac',
], list => drum = list)

window.elec
loadSounds([
  './samples/elec_beep.flac',
  './samples/elec_bell.flac',
  './samples/elec_blip.flac',
  './samples/elec_blip2.flac',
  './samples/elec_blup.flac',
  './samples/elec_bong.flac',
  './samples/elec_chime.flac',
  './samples/elec_cymbal.flac',
  './samples/elec_filt_snare.flac',
  './samples/elec_flip.flac',
  './samples/elec_fuzz_tom.flac',
  './samples/elec_hi_snare.flac',
  './samples/elec_hollow_kick.flac',
  './samples/elec_lo_snare.flac',
  './samples/elec_mid_snare.flac',
  './samples/elec_ping.flac',
  './samples/elec_plip.flac',
  './samples/elec_pop.flac',
  './samples/elec_snare.flac',
  './samples/elec_soft_kick.flac',
  './samples/elec_tick.flac',
  './samples/elec_triangle.flac',
  './samples/elec_twang.flac',
  './samples/elec_twip.flac',
  './samples/elec_wood.flac',
], list => elec = list)

window.glitch
loadSounds([
  './samples/glitch_bass_g.flac',
  './samples/glitch_perc1.flac',
  './samples/glitch_perc2.flac',
  './samples/glitch_perc3.flac',
  './samples/glitch_perc4.flac',
  './samples/glitch_perc5.flac',
  './samples/glitch_robot1.flac',
  './samples/glitch_robot2.flac',
], list => glitch = list)

var guit
loadSounds([
  './samples/guit_e_fifths.flac',
  './samples/guit_e_slide.flac',
  './samples/guit_em9.flac',
  './samples/guit_harmonics.flac',
], list => guit = list)

window.loop
loadSounds([
  './samples/loop_3d_printer.flac',
  './samples/loop_amen.flac',
  './samples/loop_amen_full.flac',
  './samples/loop_breakbeat.flac',
  './samples/loop_compus.flac',
  './samples/loop_drone_g_97.flac',
  './samples/loop_electric.flac',
  './samples/loop_garzul.flac',
  './samples/loop_industrial.flac',
  './samples/loop_mehackit1.flac',
  './samples/loop_mehackit2.flac',
  './samples/loop_mika.flac',
  './samples/loop_perc1.flac',
  './samples/loop_perc2.flac',
  './samples/loop_safari.flac',
  './samples/loop_tabla.flac',
  './samples/loop_weirdo.flac',
], list => loop = list)

window.mehackit
loadSounds([
  './samples/mehackit_phone1.flac',
  './samples/mehackit_phone2.flac',
  './samples/mehackit_phone3.flac',
  './samples/mehackit_phone4.flac',
  './samples/mehackit_robot1.flac',
  './samples/mehackit_robot2.flac',
  './samples/mehackit_robot3.flac',
  './samples/mehackit_robot4.flac',
  './samples/mehackit_robot5.flac',
  './samples/mehackit_robot6.flac',
  './samples/mehackit_robot7.flac',
], list => mehackit = list)

window.misc
loadSounds([
  './samples/misc_burp.flac',
  './samples/misc_cineboom.flac',
  './samples/misc_crow.flac',
], list => misc = list)

window.perc
loadSounds([
  './samples/perc_bell.flac',
  './samples/perc_bell2.flac',
  './samples/perc_door.flac',
  './samples/perc_impact1.flac',
  './samples/perc_impact2.flac',
  './samples/perc_snap.flac',
  './samples/perc_snap2.flac',
  './samples/perc_swash.flac',
  './samples/perc_swoosh.flac',
  './samples/perc_till.flac',
], list => perc = list)

window.sn
loadSounds([
  './samples/sn_dolf.flac',
  './samples/sn_dub.flac',
  './samples/sn_generic.flac',
  './samples/sn_zome.flac',
], list => sn = list)

window.tabla
loadSounds([
  './samples/tabla_dhec.flac',
  './samples/tabla_ghe1.flac',
  './samples/tabla_ghe2.flac',
  './samples/tabla_ghe3.flac',
  './samples/tabla_ghe4.flac',
  './samples/tabla_ghe5.flac',
  './samples/tabla_ghe6.flac',
  './samples/tabla_ghe7.flac',
  './samples/tabla_ghe8.flac',
  './samples/tabla_ke1.flac',
  './samples/tabla_ke2.flac',
  './samples/tabla_ke3.flac',
  './samples/tabla_na.flac',
  './samples/tabla_na_o.flac',
  './samples/tabla_na_s.flac',
  './samples/tabla_re.flac',
  './samples/tabla_tas1.flac',
  './samples/tabla_tas2.flac',
  './samples/tabla_tas3.flac',
  './samples/tabla_te1.flac',
  './samples/tabla_te2.flac',
  './samples/tabla_te_m.flac',
  './samples/tabla_te_ne.flac',
  './samples/tabla_tun1.flac',
  './samples/tabla_tun2.flac',
  './samples/tabla_tun3.flac',
], list => tabla = list)

window.vinyl
loadSounds([
  './samples/vinyl_backspin.flac',
  './samples/vinyl_hiss.flac',
  './samples/vinyl_rewind.flac',
  './samples/vinyl_scratch.flac',
], list => vinyl = list)
}, 0)

/*
ambi_choir.flac
ambi_dark_woosh.flac
ambi_drone.flac
ambi_glass_hum.flac
ambi_glass_rub.flac
ambi_haunted_hum.flac
ambi_lunar_land.flac
ambi_piano.flac
ambi_sauna.flac
ambi_soft_buzz.flac
ambi_swoosh.flac
bass_dnb_f.flac
bass_drop_c.flac
bass_hard_c.flac
bass_hit_c.flac
bass_thick_c.flac
bass_trance_c.flac
bass_voxy_c.flac
bass_voxy_hit_c.flac
bass_woodsy_c.flac
bd_808.flac
bd_ada.flac
bd_boom.flac
bd_fat.flac
bd_gas.flac
bd_haus.flac
bd_klub.flac
bd_mehackit.flac
bd_pure.flac
bd_sone.flac
bd_tek.flac
bd_zome.flac
bd_zum.flac
drum_bass_hard.flac
drum_bass_soft.flac
drum_cowbell.flac
drum_cymbal_closed.flac
drum_cymbal_hard.flac
drum_cymbal_open.flac
drum_cymbal_pedal.flac
drum_cymbal_soft.flac
drum_heavy_kick.flac
drum_roll.flac
drum_snare_hard.flac
drum_snare_soft.flac
drum_splash_hard.flac
drum_splash_soft.flac
drum_tom_hi_hard.flac
drum_tom_hi_soft.flac
drum_tom_lo_hard.flac
drum_tom_lo_soft.flac
drum_tom_mid_hard.flac
drum_tom_mid_soft.flac
elec_beep.flac
elec_bell.flac
elec_blip.flac
elec_blip2.flac
elec_blup.flac
elec_bong.flac
elec_chime.flac
elec_cymbal.flac
elec_filt_snare.flac
elec_flip.flac
elec_fuzz_tom.flac
elec_hi_snare.flac
elec_hollow_kick.flac
elec_lo_snare.flac
elec_mid_snare.flac
elec_ping.flac
elec_plip.flac
elec_pop.flac
elec_snare.flac
elec_soft_kick.flac
elec_tick.flac
elec_triangle.flac
elec_twang.flac
elec_twip.flac
elec_wood.flac
glitch_bass_g.flac
glitch_perc1.flac
glitch_perc2.flac
glitch_perc3.flac
glitch_perc4.flac
glitch_perc5.flac
glitch_robot1.flac
glitch_robot2.flac
guit_e_fifths.flac
guit_e_slide.flac
guit_em9.flac
guit_harmonics.flac
loop_3d_printer.flac
loop_amen.flac
loop_amen_full.flac
loop_breakbeat.flac
loop_compus.flac
loop_drone_g_97.flac
loop_electric.flac
loop_garzul.flac
loop_industrial.flac
loop_mehackit1.flac
loop_mehackit2.flac
loop_mika.flac
loop_perc1.flac
loop_perc2.flac
loop_safari.flac
loop_tabla.flac
loop_weirdo.flac
mehackit_phone1.flac
mehackit_phone2.flac
mehackit_phone3.flac
mehackit_phone4.flac
mehackit_robot1.flac
mehackit_robot2.flac
mehackit_robot3.flac
mehackit_robot4.flac
mehackit_robot5.flac
mehackit_robot6.flac
mehackit_robot7.flac
misc_burp.flac
misc_cineboom.flac
misc_crow.flac
perc_bell.flac
perc_bell2.flac
perc_door.flac
perc_impact1.flac
perc_impact2.flac
perc_snap.flac
perc_snap2.flac
perc_swash.flac
perc_swoosh.flac
perc_till.flac
sn_dolf.flac
sn_dub.flac
sn_generic.flac
sn_zome.flac
tabla_dhec.flac
tabla_ghe1.flac
tabla_ghe2.flac
tabla_ghe3.flac
tabla_ghe4.flac
tabla_ghe5.flac
tabla_ghe6.flac
tabla_ghe7.flac
tabla_ghe8.flac
tabla_ke1.flac
tabla_ke2.flac
tabla_ke3.flac
tabla_na.flac
tabla_na_o.flac
tabla_na_s.flac
tabla_re.flac
tabla_tas1.flac
tabla_tas2.flac
tabla_tas3.flac
tabla_te1.flac
tabla_te2.flac
tabla_te_m.flac
tabla_te_ne.flac
tabla_tun1.flac
tabla_tun2.flac
tabla_tun3.flac
vinyl_backspin.flac
vinyl_hiss.flac
vinyl_rewind.flac
vinyl_scratch.flac
*/