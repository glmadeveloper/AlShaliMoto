<template>
    <div class="map-wrapper">
        <div ref="mapContainer" class="section-map"></div>
    </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
    name: 'ContactMap',
    data() {
        return {
            map: null,
            center: [25.2655, 55.3267],
            zoom: 14
        };
    },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            if (this.map) return;

            this.map = L.map(this.$refs.mapContainer, {
                zoomControl: true,
                attributionControl: false,
                scrollWheelZoom: false
            }).setView(this.center, this.zoom);

            L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                maxZoom: 19
            }).addTo(this.map);

            const pinSvg = `
        <svg width="35" height="46" viewBox="0 0 35 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5 0C7.83 0 0 7.83 0 17.5C0 30.625 17.5 45.5 17.5 45.5C17.5 45.5 35 30.625 35 17.5C35 7.83 27.17 0 17.5 0ZM17.5 23.625C14.12 23.625 11.375 20.88 11.375 17.5C11.375 14.12 14.12 11.375 17.5 11.375C20.88 11.375 23.625 14.12 23.625 17.5C23.625 20.88 20.88 23.625 17.5 23.625Z" fill="#FF0000"/>
        </svg>
      `;

            const customIcon = L.divIcon({
                className: 'custom-map-pin',
                html: pinSvg,
                iconSize: [35, 46],
                iconAnchor: [17, 46]
            });

            L.marker(this.center, { icon: customIcon }).addTo(this.map);

            setTimeout(() => {
                this.map.invalidateSize();
            }, 200);
        }
    }
};
</script>

<style scoped>
.map-wrapper {
    width: 100%;
    padding: 0;
    margin: 0;
    line-height: 0;
}

.section-map {
    width: 100%;
    height: 432px;
    background-color: #1a1a1a;
    z-index: 1;
}

:deep(.leaflet-tile-container) {
    filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(100%);
}

:deep(.custom-map-pin) {
    background: transparent;
    border: none;
}

:deep(.leaflet-control-zoom) {
    border: none;
}

:deep(.leaflet-control-zoom a) {
    background-color: #333;
    color: #fff;
    border-color: #444;
}

:deep(.leaflet-control-zoom a:hover) {
    background-color: #444;
}
</style>