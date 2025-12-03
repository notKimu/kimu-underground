<script lang="ts">
    type props = {
        title: String;
        children: any;
    };

    let props: props = $props();
</script>

<div class="window-container">
    <div class="window-titlebar">
        <p>{props.title}</p>

        <div class="window-titlebar-icon-container">
            <svg
                class="window-titlebar-icon"
                viewBox="0 -9.5 21 21"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
            >
                <g stroke-width="2" fill="none" fill-rule="evenodd">
                    <g transform="translate(-179.000000, -569.000000)">
                        <g transform="translate(56.000000, 160.000000)">
                            <polygon points="123 411 144 411 144 409 123 409">
                            </polygon>
                        </g>
                    </g>
                </g>
            </svg>

            <svg
                class="window-titlebar-icon"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
            >
                <g stroke-width="2" fill="none" fill-rule="evenodd">
                    <g transform="translate(-300.000000, -4199.000000)">
                        <g transform="translate(56.000000, 160.000000)">
                            <path
                                d="M262.4445,4039 L256.0005,4039 L256.0005,4041 L262.0005,4041 L262.0005,4047 L264.0005,4047 L264.0005,4039.955 L264.0005,4039 L262.4445,4039 Z M262.0005,4057 L256.0005,4057 L256.0005,4059 L262.4445,4059 L264.0005,4059 L264.0005,4055.955 L264.0005,4051 L262.0005,4051 L262.0005,4057 Z M246.0005,4051 L244.0005,4051 L244.0005,4055.955 L244.0005,4059 L246.4445,4059 L252.0005,4059 L252.0005,4057 L246.0005,4057 L246.0005,4051 Z M246.0005,4047 L244.0005,4047 L244.0005,4039.955 L244.0005,4039 L246.4445,4039 L252.0005,4039 L252.0005,4041 L246.0005,4041 L246.0005,4047 Z"
                            >
                            </path>
                        </g>
                    </g>
                </g>
            </svg>

            <svg
                class="window-titlebar-icon"
                viewBox="0 -0.5 21 21"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
            >
                <g stroke-width="2" fill="none" fill-rule="evenodd">
                    <g transform="translate(-419.000000, -240.000000)">
                        <g transform="translate(56.000000, 160.000000)">
                            <polygon
                                points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"
                            ></polygon>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    </div>

    <div class="window-content">
        {@render props.children()}
    </div>
</div>

<style>
    .window-container {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .window-titlebar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: var(--color-border);
        padding: 0 var(--padding-s);
    }

    .window-titlebar * {
        color: var(--color-fg);
    }

    .window-titlebar-icon-container {
        display: flex;
        align-items: center;
        gap: var(--padding-s);
    }

    .window-titlebar-icon {
        height: 0.6em;
    }

    .window-titlebar-icon * {
        fill: var(--color-fg);
        stroke: var(--color-fg);
    }

    .window-content {
        border: var(--border-width) solid var(--color-border);
        border-top: none;
        padding: var(--padding-m);
    }
</style>
