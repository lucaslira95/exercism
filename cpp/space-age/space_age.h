#ifndef _SPACE_AGE_H
#define _SPACE_AGE_H

namespace space_age {
    class space_age{
        private:
            const long long int Seconds;
            static constexpr double EarthYearInSeconds = 31557600.0;
            static constexpr double MercuryYearInSeconds = EarthYearInSeconds * 0.2408467;
            static constexpr double VenusYearInSeconds = EarthYearInSeconds * 0.61519726;
            static constexpr double MarsYearInSeconds = EarthYearInSeconds * 1.8808158;
            static constexpr double JupiterYearInSeconds = EarthYearInSeconds * 11.862615;
            static constexpr double SaturnYearInSeconds = EarthYearInSeconds * 29.447498;
            static constexpr double UranusYearInSeconds = EarthYearInSeconds * 84.016846;
            static constexpr double NeptuneYearInSeconds = EarthYearInSeconds * 164.79132;

        public:
            explicit space_age(long long int age_in_seconds) : Seconds(age_in_seconds){}
            long seconds() const { return Seconds; }
            double on_earth() const {return Seconds/EarthYearInSeconds;}
            double on_mercury() const {return Seconds/MercuryYearInSeconds;}
            double on_venus() const {return Seconds/VenusYearInSeconds;}
            double on_mars() const {return Seconds/MarsYearInSeconds;}
            double on_jupiter() const {return Seconds/JupiterYearInSeconds;}
            double on_saturn() const {return Seconds/SaturnYearInSeconds;}
            double on_uranus() const {return Seconds/UranusYearInSeconds;}
            double on_neptune() const {return Seconds/NeptuneYearInSeconds;}
    };
}
#endif