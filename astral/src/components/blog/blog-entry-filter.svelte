<script lang="ts" type="module">
    import type { BlogEntryData } from '../../types/blog.entry.data';

    export let entriesData: BlogEntryData[];

    let searchQuery = '';
    const getTags = (eds: BlogEntryData[]) => {
        const tags = eds ? eds.map(x => x.tags).flat() : [];
        return ([...new Set(tags)] as string[]);
    }

    $: tags = getTags(entriesData);
    $: filteredEntries = entriesData.filter(x => x.title.toLowerCase().includes(searchQuery));
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
                <select>
                    {#each tags as t, i}
                        <option value={t}>{t}</option>
                    {/each}
                </select>
            </label>
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