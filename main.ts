namespace AbletonRadio {

    let R = 0
    let G = 0
    let B = 0
    let maxVal = 0
    let minVal = 0
    let Delta = 0
    let Hue = 0

    //% block
    export function noteDeLaCouleur(): number {
        return Note_de_cette_couleur(couleur_depuis_RGB(TCS34725.getSensorData(RGB.RED), TCS34725.getSensorData(RGB.GREEN), TCS34725.getSensorData(RGB.BLUE)))
    }

    //% block
    export function StartCapteurCouleur() {
        TCS34725.start(TCS34725_ATIME.TIME_2_4_MS, TCS34725_AGAIN.GAIN_1X)
    }

    //% block
    export function Note_de_cette_couleur(colorHue: number) {
        if (colorHue > 330 || colorHue < 20) {
            // red
            return 37
        }
        if (colorHue >= 120 && colorHue < 180) {
            // orange
            return 38
        }
        if (colorHue >= 210 && colorHue < 270) {
            // yellow
            return 39
        }
        if (colorHue >= 190 && colorHue < 210) {
            // green
            return 40
        }
        if (colorHue >= 260 && colorHue < 330) {
            // cyan
            return 41
        }
        if (colorHue >= 30 && colorHue < 120) {
            // bleu
            return 42
        }
        if (colorHue >= 180 && colorHue < 190) {
            // violet
            return 43
        }
        return 0
    }

    //% block
    export function couleur_depuis_RGB(color_r: number, color_g: number, color_b: number) {
        R = color_r * 100 / 255
        G = color_g * 100 / 255
        B = color_b * 100 / 255
        maxVal = Math.max(R, Math.max(G, B))
        minVal = Math.min(R, Math.min(G, B))
        Delta = maxVal - minVal
        if (Delta < 0) {
            Hue = 0
        } else if (maxVal == R && G >= B) {
            Hue = 60 * ((G - B) * 100 / Delta) / 100
        } else if (maxVal == R && G < B) {
            Hue = (60 * ((G - B) * 100 / Delta) + 360 * 100) / 100
        } else if (maxVal == G) {
            Hue = (60 * ((B - R) * 100 / Delta) + 120 * 100) / 100
        } else if (maxVal == B) {
            Hue = (60 * ((R - G) * 100 / Delta) + 240 * 100) / 100
        }
        return Hue
    }

}
basic.forever(function () {
	
})
