import alt from 'alt';
import natives from 'natives';

const AIMPOS_KEY = 77; // M

alt.on("keyup", function (key) {
    if (key == AIMPOS_KEY) {
        if (alt.Player.local.isAiming) {
            console.log('[Aiming info:]');

            var entityFound = natives.getEntityPlayerIsFreeAimingAt(alt.Player.local);
            if (entityFound[0]) {
                var entityHash = natives.getEntityModel(entityFound[1]);
                console.log('Entity hash: 0x' + entityHash.toString(16).toUpperCase());
                
                var entityPosition = natives.getEntityCoords(entityFound[1], false);
                console.log('Entity position: (X: ' + entityPosition.x + ' Y: ' + entityPosition.y + ' Z: ' + entityPosition.z + ')');
            }

            console.log('Aiming position: (X: ' + alt.Player.local.aimPos.x + ' Y: ' + alt.Player.local.aimPos.y + ' Z: ' + alt.Player.local.aimPos.z + ')');
        }
    }
});