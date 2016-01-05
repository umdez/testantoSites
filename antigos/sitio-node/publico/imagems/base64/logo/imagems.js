'use strict'

/* @arquivo imagems.js 
 * @descrição organizar imagems básicas do sitio em base64.
 */

Global.IMAGEMS_BASE.IMAGEMS_LOGO = [
  {
    arquivo: "logo.jpg",
    tipo: "data:image/jpeg;base64",
    base64: "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCABUAM0DASIAAhEBAxEB/8QAHQAAAQQDAQEAAAAAAAAAAAAAAAYHCAkBAgMEBf/EAE8QAAEDAwIDAwcFCwoDCQAAAAECAwQABREGBwgSIQkxQRMUIlFhcYEVIzJ1kRYXJDM4QnKSobGyGDQ3UlZzlLPD0ShiYyU1Q0R0gpXB0v/EAB0BAAEFAQEBAQAAAAAAAAAAAAYABAUHCAMCAQn/xAA8EQABAgQEAwUFBQcFAAAAAAABAgMABAURBhIhMUFRcQcTImGBFJGhscEyNHLR8AgVNTZSsuEkU3OCov/aAAwDAQACEQMRAD8Av8rCjgUKOBTfcRXEXY+G/Qxu94UX33lFqDBbUA9Odx9FOe4DxV3AU2nJxiUYVMzKglCdSTHhxxLaStZsBCy1Hqq3aOsr9xu02NboMZPM6/IcCG0D2k9KjJup2qWldNSXI+lrTN1S6glPnBX5tF+CiCVfAVETfXiB1LxF6i891HK/BGnCuJbGlHzSGPDA/OVj84/YKRgGRWeMSdsM264WqOMiP6iLqPodB8YDp3EbhOWWFhz4xITVfaa7k6hWoQmrJZGichLLSnlgfpK7/sr4UXtC91rU55b5biSeXryPxElJ9+MGmZrnJ/m6/wBE1XTmM664vvFTS79bfAaRDGpzZNy4YfXd3RXFvvRpqbuTtNuu67EnO5c0d5FmL5lytpyIz6kq5snJ5Vjx76hLr3tIuKTajV7un9Va91vpm+snCoNziMMOq9qMt8qx7Uk1cf2fI/4fI3/qFfwppdb6cNuhuJbSarJrrTNq1Jb+9CJjAWtlX9ZC/pIPtBFaUp1Lm56lszTcwpLikgm5NifpGpez/tQkZGWal67TWZhAAGbu0BwdTayvWxPExXF2JXG5uxxGcWeorFrnW921HaYmnDMZiykNBLbvlgnn9FAOcHHfVqtV77I8I23nZh9oA5drXerpG0xq2wCAiNP+eRa31yPQ+e7/ACZxj0h0JHWrBmnA4kEEEEZBHiKm8MTCiyuVeczOtqIVrcjl6cohO0mt0Kq1tUzh5IQzlSMoTksq2oI2v5jQ842oooomgCgoqLG6/acxdrd0L7ppejLhNXZJPmxkIntoS96IVkJIyO+vucNvaCRuIndNGmGtKzbQtcNyX5y7MQ6n0CBy8oGeuaEmsdUR2cEgh+7hVltZW97W2tvEemqSqnO6CvFe3HeJF0Vqk5rai2JCCisE9Kafis4rYXC1YLVLk2t+8yLvJMdqKy8lpXKkZUvKvAdPtplUajLyEuqbm1ZUJ3Mc3nkNILjhsBDs0VDk9rnB/sFdP/kWv9qcThh4+rdxIbiyNOfc9LsMpEMy2FvykPCQArCkjlHQjIPxobksfUGbfTLS8wCtRsBZQufUQyaq0o4sNoXqesSCorCTkUKOBRjEjGaKZfiB45tGbASV2995y935I622AQpbR/6ivoo+PX2VHfUHay6qlSybZpCyw2M+iJU5brhHt5UACgyr9oFDprhZmHrrG4SCq3W2kRszVpVhWRatfLWJ4UVB/SXa2XRh8C/aKjPs+LluuBCx7eRaBn9apW7E732jiD0C3qGyJloiKeXHUiS15NxDiMcwx8e+nVCxnSKwvupF267XsQQbeojpK1KXmDlaVcwoNYarg6H0vPu9yfRGgW1lUiQ4o9EISMmqpt9N77nxFbly9T3Pnabdy1bYalZECLnKUj/mV0Uo+v3VLftWt1TaNA2XR0deHdQPKky8Hr5uzjoR6lLI/VNQbByT76pTtgxK4/OikNHwN2KvNR2v0HxMDOI51SnPZ07DfrBWaKKpeBeCucn+br/RNdK0kn5hXuNKPsWU9nyf+HyL/fH+BNPlTGdnr+TvDPreP8KafOts4R/gst+ARZ9P+7I6CIIdqe2Hdy4iVAKSq0NhST+cPLml52a3E67q+xq0DfJC37pZmi5bZDqsrlRQfxZPipvIHtTj1UhO1M/pQhfVLf8AnGo3ba6/lbUbi2TUsJRS/ZpaXyAcc7Z9FxJ9hQVCqHqmInaNjR2ZSfAVALHNJtf3biBSYnVS1TUvhex6Rb8k5orx6eu7WoLJEnsKC2JrKH2yDnKVAKH769taZQsLSFp2MG4NxcRVPxadeKTXn1n/AKaKXPZpflXR/qeT+9NIbiz/ACpNefWf+milx2aX5V8f6ok/vTWQqV/OKP8AnP8AcYruX/iQ/H9YsgooorX8WJGKrc7Rvcz74fEk/Abc54Gk4qYDYCsjyy/TdPv+in4VYPuVrWPtzoC9X2UoJYtEN2Uok4+iknHxIqoe5XuRqW5S7rOUVSri85MfKj3KWSo/YKpHtorPdSbVNQdVnMeidvj8oGMSzOVtLA46noI+5Zttpl72r1Bqxr+Y6emxoLqOT8YXs5Vnw5Omf0q9Gxu5StnN5tN6mSVBq2zEplAfnR3MIcHwBB+FTH4U+H1vU3ABNs8pARI1oxInZKeqVLHzR+HKk1AoMGRGUzISUuYUy8kj6Kh6Kv2iqkrFEeoiJGfRopaQv/sDf5EQPTMsqVDTw3Iv6/q0XNMyESoyHG1BSHEhSFA9FA9RUce0F4sZOyOlY+m9PPeS1TqFtShIHX5Mjjop3H9Yk4T7cnwpXcCO6yt2OG6xvvuFc+1JNsl5PUrawAfinlNQE4ntwXd0OIXVl2dWpSBNXCjgn6DLJ5EgfHJ+NXdjzGamMPNTEkbKmALHkLXV68IKKtUiiTStrdf6MINLXIpw5UpTii4444rmW4o9SpRPUk95NLvbDhl19vJCEvTumZUm3q6pmSViMw7+gVdVD2gYr7nBjsfH3+33iWuekLs9rZNxuCCOj6EqCUNe5Su/2CrP4MNq3xG2I7bbLDKQhttCQEoSBgAAdABVaYC7Ok1xpU9OLKW72Ft1HjqdohKTRhNJLrpsn5xVZuNwobj7VW9Uy86VlCE2MrkwnBKbaHrUE9QPbipndl44l3hfBSoKBu8rBB7/AKFSIUjmBBxg94PjXzdI6JtehYUiNaIEa3R5UlyW42wgJQp1ZytWB4k1beG+zliiVX26UdJQUlJCt9SOI6coIZKjIlX+9bVpa2sV99pjcnJ/FC40skphWuO2gZ7ubmUf2mo/jpT79pGko4rLl4ZgRDn1+gaYms8Y3JNfm7/1mA6rffHOsFFFFCsR0Fc3x8wr3Gulavfile40oUWTdnirPDnC/vlfwpp9KYfs71Y4b4X98r+FNKvani40PvLu7rPQllvDa9WaClea3a3OjkeRkAh1A/Pb9IDmHcehxW1cJOITRpRKjYlAt7otikSj70n3jSCoISCogbC9rnkLkCIvdqb/AEnwvqhv/ONRSeb8q0pJ7lAg1K3tTf6T4X1Q3/nGoqKrMPaN/MEz1+giva197X1izjgH1SvV3CVo2S6ordaiKiqJ7/mnFIH7EingAwKYbs0YK4XB7por/wDHckup9xfXin6zWpcKOLcosote5bR/aIO5BRMs2TyHyiqfiz/Kk159Z/6aKXHZpflXx/qiT+9NIfi0/Kk159Z/6aKUPAVr+y7acRrV2v8AcotqtqLW+0ZEhfKjnURhOfWcVlynOIbxclxw2AfNydvtGAVlQTUQTtm+sWb0U1o41dq/7c2D/ECvv7d8QWjd2rrIhaa1FbLxKith51qM7zqbQTgEj1ZrWLNZkHlhtp5KlHYBQJg/TMNKOVKgT1hje1P3MOnNnIGmmlhLuqJfK8AevkGsKX8CcCoI2zT7+r7zBs8ZJVIvEpqEgJ7z5RYSf2E08faDbo/fK4mLky24FQdMsptbAByC59N1X2kD4UyapaYjiSXQysdUqC+VQPrB8DWT+0GspqFfddOqEEJHRO/vN4r+sTPfTajwGnui4jStjj6V01AtkcJQxb47cdsDwCUhI/dVZXGjtn96riW1HEbQExLo4LrFwOnK79MD3LzTYnVEhR/74m/41f8AvXJ26+fvDystclzGAXHi4rHqyTnFSOMcey1ckW5RMvkLZFjmvpaxGw3+kOKlV0TTQbCLEecSn7K/dI6f3Oveknl/g9/jpmxgT0S81kLA/SQofqio3a7hrt24OoY7oIcZuspCge/PlTXp2s3Fe2k3MsWpmc/9jTEPOpBxztE4cT8Uk05/H3teNDb6qvkT07LrlkXOI6kej5XA8onPrOUq+JqJemHZ7DTbe/syzf8AC5t/6BHqIbKWp2RA/wBs/A/5ha9k/cGY+9Gq4y8eXk2hhxrPilDqgr94qe6DkVUZs9upcdkdybXqe1JS7JtqiFsKVyplMqwFtE+GR3HwIFWRbM8YmhN6rU27AvcSDOKQXrfOcDMlhXiCCevvHSrc7JMSyQpv7seWEuIJIvpcE306GCHD0613HcKNiIdOikBuvxN6K2Ysipt7v0FGQfJRmXA7IfPqQgHJrzcLm/SuI7bd/UfyabU18ovxGGFOc6y2gjlUo+CiD1HhVrorUkubEihwFwgmw10FtTbbeCATLRc7oK8W8RN7VTRbll3isF9x+DXy3qjFXqcZUDj4pWPsNRgFWccbewrm/exc6BBQk3m1qFwtuR1W6gHLf/uSSn4iqxI7vlm+blUg5KVIUOqFDopJ9oOR8KzF2qUVclW1TFvA94gfPYj9c4Ba/LFqaK+CtfzjpRWAelZqtIg4K0d/FK9xretXPSQelKPsTO254o7PwddnFcdd3dQX8nqUzBjZwqdLWAlllPtKu/1AKPhVOG129WqLHxPW/cePeHIGtZl5cuK7ghWB5d9eVNL/AKzCshBSfzevhUpu0ouE66cFG1YjqUbNZr/I+UQPosvvMDzZa/AAhLqRnxBFQ60Tt3dteahZhwoclKEYkS5a2yiPAjpIUuQ64fRQhKRnJPXoB1NaDRUnXpOTZa2QhNrc+J+kfpL+znhqnM4MXUniFKmQpKr7BKbjL66k87iLVeLreFviA0pozWLccw13rT7ZkxirJiSUSVtvNE/8riVD24FMPLUfN18oyojlSPWo9APtIpUOOlWx9hUtK21SmlXFLbieVaGpUlbscKSeoUtnlcx4BYpwuBXYVe9u+kJ6S0VWPTS0z5px6LrifxTXxVhR9iarnEEm9VsSmXZ1U4oD4C59NYwZjGntpxHMyUpqgOKSOgNvhE/eHHQn3stjNLWLGF2+3NIcA/rkcyv2k0ts1qlGPZ6q2rW8nLJl2ES6NkgAegtBM2gIQEDhpFTvF1eIjHFPr1K5LCVpueCkr6j5pFN4q+wF98uMfesVcLO2z05dpzkmTYbNIkPnmcdciIUtw+skjJNc/vSaU/s3Y/8AAt//AJqiKh2NTUzNOzAmUgLUTbKeJvzgVew0tbil5xqb7RT58tW8f+ai/rCpBcAW6dt2vnbk6kXKieTsumjKJKwBzBR5AT7VYHxqwBW1GkkYB07YhzHA/AWuv7K2VtVpnzORHGn7MGJSQl5sQ0BLoScgKGOoB69acUXsjnKdOInETKSU3t4TvYgcY9y2HXGXQ6FjTyioB/VLNzfdlypzCpUtxT7yi6CStZ5lH7TU6+zV2IsN/wBiX7/erRbLs5e57i4y5LCXuRlACAEkjoCQo9KkXF2i0Y43zM6c0+tAOMohNEZ+ylBabdEscVuHDYjxWGk4bZZQEJQPYkd1SuEey5VLqHt066l3Q2GXieOvrDmn0FUu93jpzeVoTf8AJ+0N/ZHT3+Ab/wBqQfEzwwaZ1NsVqaLZ9OWeDdEw1vxXo8RCHEuIHMACBkZxj409QXkeNc3loJwsjChjBP0vXVlTtCkZiXWwWkjMCNhxiaclW1pKMo18opgau0SZESVSI3K6kcwLqfHvFTr4dNPWfjh4JI+mLnMQLrpl0wW5jRDjkJ5sfNO4z3FBAIz1Gafpjhj26zlGjdOHmJJIhIOSep8PfW+y33Ktv6hY0tYU2ePb5/mUp1uF5s1MeQn0ig/nhOcc3rzVXYU7MpilzS/a3UuNOJKVJsdRuPdELTcOvMla1nMi1lb8dorK3l2W1Nw+6gXb9VQDETzEMTkAqhzAD9JC/A93oq6jNJJyE1cmwVNtSEjqlWAoD3GrkL3ZoOo4SodwjRpsd4HmYfbC0rHuPSmj1B2fu0moZqn3dIxGHFKyRGWtkE+5JxUBWOxaYDpVTHgUclXuPUXv7oYTOGV5rsK084rHLUS0ZWRHjHGCokAkfvqxrsvwr+S+lRQ4gLu0pSedBTzJPJgjPh7aWWiODfa3a+WiTb9J2huRzAIdkp8srm9hXnrTpRWExmghtCW0JACUpGAB7BRRgHs5mqJOmfmnUqOUpsm/G2tz05Q/pNFclXO+cVwtG7h9A1BbtBeDORpq+TNwNKRFP2yYou3uCy36cVzxkoA70n88eHf66nURkVq4gKTgjIPeCO+j3FGGZWuSRlJnQ7pVxSef5iJWekm5pru1+h5RTO26l5sKSoKSrqCPGtx0qcvFD2bEPWsyTftBORrPdHiXH7Y4nEOWo9SUEfilfApPqFQx3D251DtHcDG1PZbhZV5KUrfaPkV/ouD0T9tZQxFg6p0Z0pmUEo4KGqT+XQxX85TX5ZVljTnwj5FYPWtG5CHxlC0LHrSoGtublHeKFYj4UGkNe/c/b5NtmQot1s1wbUxKhSWUvsSGldVNuNK9FaCQDjoUqGUkV6IJ2107aURrRotthplYdZhPSpUy3x1g5SpER1ZaHKeqQvmCT1ApJKnNF9LSXEreWQEtt+mtR9QA6092w3AbrneiSy/MiO6VsagFKmTmvnnE/wDTZyDk+tWBRbh+arj3+ipmZV+Q29eEFNFxFXJRlUnTX1oQrdKVEA9eHrCBsVo1FxCbgRLDZIjsu5znVPcq3C55PmPzkqQ5/wDfsCU9Ksv4bNg7bw57YQ9PQVecvpy9OmKThcx9XVSz6h4AeAArOwfDrprh20v8nWGL867gy5r2FSZivWtXq9QHQUvkjArQuBMCfucGdnTnmFbngkch9TE1S6X7Pd103WYzWCcVmirKiZiPvAdq2JNsOuYLt1afuI1zeQIzksOPJSHU9AknmAHq7hmmh1BxOXZfF4NyWWdRDbSw3ROhn5YUkWV2MtQD9wWc552phS1nGOUK61LS1bE6NsWu39UQ9MWOLqKVzeWuTMNCJLpUMKKlgZOQBn3V9Q7f2Q6TXYfkm3fIrqVIXB83T5utKiSoFGMdSST7TUcZV1TaUZrZfjy/zBW3W5JuadmO6Ku8FrG2l/tWtx5HrEO+0vtj993VbTGZsclcDQVyntLuV5ct3yepDyT51HUnveSBlOfEJycE0o9/Nwkaq4fdj/lO+agtm3msJsFjU12fJiynWVsZZakrTgtIfe5EOKBHRWMgKqR+t9kNH7lvwHNQ6asl6XawBEVNhoeMcZBwnmBwMgdPZX3L3pq36lsMi13CFFnW2W0WH4r7SXGXmyMFCkEYIx4V8MisrcVm+1HVOI2Ey8qz3Zu1e50431G+ovceY4xF+PpnTGynGpoGzbWOMRlX+DKVqiyQJRdhpgoR8zNcbBKW3A7hCV9CsEjrjo0W6jT104+r+y7IiachOavs7TGsnJ7pft0hEZDnyWGAQhIkpyEqUeUlSgQVYqcW22yWkdnWpSdLacs9hE5SVSDCjJaU+UjCeYgZOB3A91ey77Y6dv8AHuDU2yWuW3dnG3pqXYyFedON48mteR6Sk4GCeowMV5ckFLSBe2t7Dba1o6SuKGmHSrIV3byZlfavmzZjwNtgDcWABuIjHx+7oai1TuJatF6FY1NNu+jo33YT1WIpJakNq/AIkgEjLT60u8ye8pbPSuXHFeNI8SfARG3FaaalKDEaTb5KX1trhKdeaS8gFJBBBygj2GpYQNNwLVc5k2NDjMS7jyGU+22EuSOQcqOdXerlBIGe7NeL73Fg+5tyz/I1s+SXnC6uF5sjyCllXOVFGMZKuvd317VJrUV3VoobcuUNWK+wymWDbZBZINwdVX1XfqdvKGG4x7RB2O4WLTZrK/M0dold4hwr7Otri0u2q2uufPrSvqpCSSlKl59FKyemKTetdJ6K2K4gNp0bUy24WoNQTjFnWi2Sy/HutoDZLsiQjmI+aPIpLx68ysZPNUsZltYuMFyNIZafjvILbjTiApDiSMFJB6EEeFJjbjYTRe0EqS9pfS9jsD0xIQ+5BiIZW4kHISSBnlGeie72V6clCpd02tp1FuX698c5OuoaY7twKJ8dxcWXmFvHx09fKx1iGnG2zIuHGLcWsxbVblxrJGd1e9OcQvRTynlqaWllJAUl8go5yQArAVkGn/15PW32ge2sbzt3kc0neFFoOkJew7E9Ip7iRnv9tPDe9vbFqRFwTcLRbZqbswmNND8dK/O2k55UOZHpJGTgH116BpO2JukSb5hF88gMKjRn/JjyjDSsZQlXeEnlTkewV8TJKSpSr7kH43tHV/ETbjTTfd2yNqR1KkBOby14DT1uTFTSOkdFb78Q27bW7ExEy+aduJjW20XOUY8e1WjkBZkx0cwB8r6SlPDrzDGRinK7P++Q71svc02nUt51Zp+36hnQrNcblzLcXCbUkNJQ4rq82kdEuHPMOuTTi7i7EaM3dkxntT6Ysl9ehgpZcmxEOrbSe9IJGeU+rupT263R7RBZixWGo0aOgNNMtICENIAwEpSOgAHcBXtmVUhzMbcepvzhvUKy3MS3cpChfLpcZU5Rbw8dfTzvvHUDFCuooop7A5AO815rna414huMS47MphQwpt1AWlXvB6UUV8UlKgUqFxC8oajVvAjtjrSUXpGnm47iiSTEWY/8OK+PG7NvaqM6FfJNwcx+a5PcUPsJoooCmqDTFP5lS7ZP4E/lEYuUYKrlA9whxtvthNIbWACyWG3Q1gAeVDKS5+tjNK9fRXwooozkZZlhoIZQEjyAHyh+2hKU2SLRvihRwKKKdx0gQcitVHCjRRShRnOftrKjiiilCjXOftrZH0aKKUKM0UUUoUaq+kKxj0sUUUoUYHpAe+tk9TRRShRtRRRShQUUUUoUf//Z"  
  }
];

