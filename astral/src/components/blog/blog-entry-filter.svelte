<script lang="ts" type="module">
    import type { BlogEntryData } from '../../types/blog.entry.data';

    export let entriesData: BlogEntryData[];

    let searchQuery = '';
    let selectedTag = '';
    
    const getTags = (eds: BlogEntryData[]) => {
        const tags = eds ? eds.map(x => x.tags).flat() : [];
        return ([...new Set(tags)] as string[]);
    }

    const clearFilters = () => {
        searchQuery = '';
        selectedTag = '';
    }

    $: tags = getTags(entriesData);
    $: filteredEntries = entriesData.filter(x =>
        x.title.toLowerCase().includes(searchQuery) &&
        (selectedTag !== '' ? x.tags.includes(selectedTag) : true));
</script>

<section>
    <fieldset>
        <legend>Query</legend>
        <div>
            <label>
                Name: <input type="text" bind:value={searchQuery} />
            </label>
            <label>
                Tag:
                <select bind:value={selectedTag}>
                    {#each tags as t, i}
                        <option value={t}>{t}</option>
                    {/each}
                </select>
            </label>
            <button on:click={clearFilters}>Clear</button>
        </div>
    </fieldset>

    <ul>
        {#each filteredEntries as x}    
            <li>
                <a href={x.urlPath}>{x.title}</a>
            </li>
        {/each}
    </ul>
</section>