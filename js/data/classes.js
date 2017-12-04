define(function(require) {
  return _.chain({
    Barbarian:  [7,12,11,10,10,['str','con']],
    Bard:       [7,12,10,11, 8,['dex','cha']],
    Chaos Mage: [8,10,10,11, 8,['int','cha']],
    Cleric:     [7,14,11,11, 8,['str','wis']],
    Commander:  [7,,['str','cha']],
    Druid:      [6,10,11,11, 8,['str','dex','wis']],
    Fighter:    [8,15,10,10,10,['str','con']],
    Monk:       [7,11,11,11, 8,['str','dex','wis']]
    Necromancer:[6,10,10,11, 8,['int','cha']]
    Occultist:  [6,11,10,11, 8,['int','wis']]
    Paladin:    [8,16,10,12,10,['str','cha']],
    Ranger:     [7,14,11,10, 8,['str','dex','wis']],
    Rogue:      [6,12,12,10, 8,['dex','cha']],
    Sorcerer:   [6,10,11,10, 6,['cha','con']],
    Wizard:     [6,10,10,12, 6,['int','wis']]
  }).map(function(x,name) {
    return [name,{ hp:x[0], ac:x[1], pd:x[2], md:x[3], recovery:x[4], boost:x[5] }];
  }).object().value();
});
