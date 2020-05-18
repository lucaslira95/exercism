namespace space_age {
    class space_age{
        private:
            const long Seconds;
            const double Earth = 31557600.0;
            const double Mercury = Earth * 0.2408467;
            const double Venus = Earth * 0.61519726;
            const double Mars = Earth * 1.8808158;
            const double Jupiter = Earth * 11.862615;
            const double Saturn = Earth * 29.447498;
            const double Uranus = Earth * 84.016846;
            const double Neptune = Earth * 164.79132;

        public:
            space_age(long num) : Seconds(num){}
            long seconds() const { return Seconds; }
            double on_earth() const {return Seconds/Earth;}
            double on_mercury() const {return Seconds/Mercury;}
            double on_venus() const {return Seconds/Venus;}
            double on_mars() const {return Seconds/Mars;}
            double on_jupiter() const {return Seconds/Jupiter;}
            double on_saturn() const {return Seconds/Saturn;}
            double on_uranus() const {return Seconds/Uranus;}
            double on_neptune() const {return Seconds/Neptune;}
    };
}