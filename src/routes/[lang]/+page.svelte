<script lang="ts" module>
    const _LANG = fromStore(language)
    const derived_LANG_module = $derived(_LANG.current)
</script>

<script lang="ts">
    import { page } from "$app/state"
    import { language } from "$lib"
    import { fromStore } from "svelte/store"

    const derived_LANG_script = $derived(_LANG.current)
</script>

<p>JSON.stringify(page.params): {JSON.stringify(page.params)}</p>
<p>derived_LANG_module html: {@html derived_LANG_module}</p>
<p>derived_LANG_module: {derived_LANG_module}</p>
<p>derived_LANG_script: {derived_LANG_script}</p>
